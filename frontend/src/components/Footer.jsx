export default function Footer(){
    return (
        <footer className="border-t border-white/10 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div>
                        <p className="font-semibold text-white">MOhar Singh Yadav</p>

                        <p className="text-sm text-gray-500 mt-1 ">Full Stack Software Engineer  / AIML</p>
                    </div>

                     <div className="flex items-center gap-6 text-sm text-gray-500">

                        <a
                            href="https://github.com/moharsingh123"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mohar-singh-061469297/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 text-center">

                    <p className="text-xs text-gray-600">
                        Built with React • FastAPI • Groq • LLM
                    </p>

                </div>

            </div>

        </footer>
    )
}