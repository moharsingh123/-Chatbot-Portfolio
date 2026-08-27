
import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq
from pypdf import PdfReader
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI();

# cors configure 
FRONTEND_URL = os.getenv("FRONTEND_URL")

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

if FRONTEND_URL:
    allowed_origins.append(FRONTEND_URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


load_dotenv();

my_api_key= os.getenv("GROQ_API_KEY");
if not my_api_key:
    raise ValueError("API key is not present");

client=Groq(api_key=my_api_key);
model= "openai/gpt-oss-120b"


# pdf extarction

def read_pdf(file_path):
    reader = PdfReader(file_path)
    text = ""

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text

def read_resume(file_path):
    if file_path.suffix.lower()== ".pdf":
        return read_pdf(file_path)
    else:
        return None
from pydantic import BaseModel
class Resume(BaseModel):

    name: str | None = None

    email: str | None = None

    phone: str | None = None

    linkedin: str | None = None

    github: str | None = None

    portfolio: str | None = None

    location: str | None = None

    summary: str | None = None

    total_experience_years: float | None = None

    skills: list[str] = []

    education: list[str] = []

    projects: list[str] = []

    certifications: list[str] = []

    languages: list[str] = []
resume_schema= Resume.model_json_schema();
from pydantic import BaseModel
class ChatRequests(BaseModel):
    question:str
def resume_parse(resume_text):
    user_prompt = f"""
                    You are an expert Resume Parser.

                    Extract the following information from the resume.

                    Resume:
                    {resume_text}
                    Return the url inplase of the LInkedIn or github or projects link view   adn github file
                    Return ONLY valid JSON.

                    Rules:
                    - Do not explain anything.
                    - Do not add markdown.
                    - If a field is missing return null.
                    - Skills must be an array.
                    - Education must be an array.
                    - Certification must be an array.

                    JSON Schema:

                    {json.dumps(resume_schema, indent=2)}
                    """
    
    message={
        "role":"user",
        "content":user_prompt
    }
    messages=[message];
    response_format={
        "type":"json_object"
    }
    response=client.chat.completions.create(
        model=model, messages=messages, response_format=response_format
    )
    raw_data=response.choices[0].message.content
    data=json.loads(raw_data);
    return Resume(**data)

# resume_path = Path("Mohar Singh Yadav Resume MERN Full Stack.pdf")


BASE_DIR = Path(__file__).resolve().parent

resume_path = BASE_DIR / "Mohar Singh Yadav Resume MERN Full Stack.pdf"
if not resume_path.exists():
    raise FileNotFoundError(
        f"Resume not found :{resume_path}"
    )
resume_text = read_pdf(resume_path)
parsed_resume = resume_parse(resume_text)
        # home page


def ask_ai(question:str):
    system_prompt = f"""
            You are Mohar Singh's AI Portfolio Assistant.

            You answer questions exactly as Mohar would during an interview.

            Here is the parsed resume in JSON:

            {parsed_resume.model_dump_json(indent=2)}

            Additional Information:

            LinkedIn:
            https://www.linkedin.com/in/mohar-singh-061469297/

            GitHub:
            https://github.com/moharsingh123

            IntervAI:
            https://intervai-2-client-7n9q.onrender.com/

            WanderLust:
            https://wanderlust-full-stack-vqba.onrender.com/listings

            Rules:
            - Answer only using the information provided.
            - Never invent information.
            - If information is unavailable, politely say you don't have that information.
            - If the user asks for a project link, GitHub, or LinkedIn, provide the correct URL.
            - Keep answers professional and concise unless the user asks for more detail.
            """
    system_message={
        "role":"system",
        "content":system_prompt       
    }
    user_message={
        "role":"user",
        "content":question
    }
    messages= [system_message, user_message]
    
    response = client.chat.completions.create(
        model=model,
        messages=messages
            
    )

    return response.choices[0].message.content

@app.get("/")
def home():
    return {
        "message": "HireMe AI is Running"
    }
@app.post("/chat")
def chat(request: ChatRequests):
    try:
        answer= ask_ai(request.question);
        return {
            "question" :request.question,
            "answer":answer
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
              detail=str(e)
              )