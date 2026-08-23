import { useState } from "react";
import api from  "../services/api"

const suggestedQuestions = [
    "Tell me about yourself",
    "What are your technical skills?",
    "Tell me about IntervAI",
    "Give me LinkedIn",
    "What is your education?",
    "Give me your GitHub",
];


export default function ChatBox(){
    const[question , setQuestion]= useState("");
    const[answer , setAnswer]= useState("");
    const[loading , setLoading]= useState(false);
    const[error , setError]=useState("");

    const askQuestion= async(customQuestion=question)=>{

        if(!customQuestion.trim() || loading){
            return;
        }
        try {
            setLoading(true);
            setError("")
            setAnswer("")
            const response= await  api.post("/chat" , {question: customQuestion.trim()})
            setAnswer(response.data.answer);
        } catch (err) {
            console.log("api Error " , err);
            setError(
                err.response?.data?.detail || "Unable to connect to the Ai Assistant."

            );            
        }finally{
            setLoading(false);
        }
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        askQuestion();
    }

    return(
        <div  className="rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 px-7 border-b border-white/10 flex items-center gap-4">
                <div className="relative">

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-purple-500 to-pink-500 
                    flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
                         ✦
                    </div>
                    <span className="absolute -right-1 -bottom-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#10131d]"/>

                </div>

                <div>

                    <h3 className="font-semibold">Hire Me</h3>
                    <p className="text-sm text-green-400">
                        AI Portfolio Assistant
                    </p>
                </div>

            </div>
            {/*  chat Area */}

            <div className="min-h-[300px] p-6">
                {!loading && !answer && !error && (
                    <div className="min-h-[250px]  flex flex-col items-center justify-center text-center">
                        <div className="text-5xl mb-5">
                          ✨  
                        </div>
                        <h3 className="text-xl font-semibold">
                            Ask me anything about Mohar Singh 

                        </h3>
                        <p className="text-gray-500 mt-2">
                            Skills , Projects , Education, Certifications and more.

                        </p>

                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                            ✦

                        </div>  
                        <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4">

                            <div className="flex gap-1">

                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />

                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />

                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />

                            </div>  
                         </div>      

                    </div>
                )}
                {/* Answer */}
                
                {!loading&& answer && (
                    <div className="flex gap-4">

                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            ✨
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 mb02">HireMe </p>
                             </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-5">
                                <p className="text-gray-200 leading-7 whitespace-pre-wrap">{answer}</p>
                        </div>


                    </div>
                )}

                {/* Error */}

                {error && (

                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300">

                        ⚠️ {error}

                    </div>

                )}

            </div>
            {/* suggestion */}
            <div className="px-6 pb-5">

                <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">
                    Try asking
                </p>

                <div className="flex flex-wrap gap-2">

                    {suggestedQuestions.map((item) => (

                        <button
                            key={item}
                            disabled={loading}
                            onClick={() => {
                                setQuestion(item);
                                askQuestion(item);
                            }}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/40 transition disabled:opacity-40"
                        >

                            {item}

                        </button>

                    ))}

                </div>

            </div> 

                       {/*Input  */}

            <form 
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-5"
            >
                    <div className="flex gap-3">
                        <input
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        placeholder="Ask about Mohar"
                        disabled={loading}
                        className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500/50 transition placeholder:text-gray-600"
                        />
                        <button 
                        type="submit"
                        disabled={loading|| !question.trim()}
                        className="px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-medium hover:scale-[1.02] transition disabled:opacity-40"
                        
                        >
                            {loading? "...." :"Ask AI"}
                        </button>
                    </div>
            </form>

        </div>
    );
}