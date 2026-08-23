import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";

export default function Home() {

    return (

        <div className="min-h-screen bg-[#030712] text-white overflow-hidden">


            {/* Background Effects */}

            <div className="fixed inset-0 pointer-events-none">

                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />

                <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />

                <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[140px]" />

            </div>


            <Navbar />


            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32">


                {/* Hero */}

                <section className="text-center max-w-4xl mx-auto">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">

                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                        AI Portfolio Assistant

                    </div>


                    <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-tight">

                        Get to know

                        <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

                            Mohar Singh Yadav

                        </span>

                    </h1>


                    <p className="mt-7 text-lg md:text-xl text-gray-400 leading-8 max-w-3xl mx-auto">

                        Instead of browsing through my resume, just ask my
                        AI assistant about my skills, projects, education,
                        certifications and experience.

                    </p>


                    {/* Tech Stack */}

                    <div className="mt-8 flex flex-wrap justify-center gap-3">

                        {[
                            "RAG",
                            "LLM",
                            "vectorDB",
                            "React.js",
                            "Node.js",
                            "MongoDB",
                            "Java",
                            "Generative AI",
                        ].map((skill) => (

                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-400"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </section>


                {/* AI Assistant */}

                <section
                    id="assistant"
                    className="mt-16"
                >

                    <ChatBox />

                </section>


                {/* About */}

                <section className="mt-16 grid md:grid-cols-3 gap-5">


                    <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                        <p className="text-sm text-purple-400 font-medium">
                            ABOUT ME
                        </p>

                        <h2 className="text-2xl font-bold mt-3">
                            Full Stack Engineer building AI-powered applications.
                        </h2>

                        <p className="mt-4 text-gray-400 leading-7">

                            I am a B.Tech student specializing in Artificial
                            Intelligence and Machine Learning, with hands-on
                            experience building MERN stack and AI-powered
                            applications.

                        </p>

                    </div>


                    <div
                        id="skills"
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                    >

                        <p className="text-sm text-blue-400 font-medium">
                            CURRENT FOCUS
                        </p>

                        <div className="mt-5 space-y-3">

                            <p className="text-gray-300">
                                ⚛️ React 
                            </p>

                            <p className="text-gray-300">
                                🟢 Node.js & Express
                            </p>

                            <p className="text-gray-300">
                                🤖 LLM & Generative AI
                            </p>

                            <p className="text-gray-300">
                                🧠 RAG & AI Applications
                            </p>

                        </div>

                    </div>

                </section>


                {/* Projects */}

{/* Projects */}

<section className="mt-20">

    {/* Section Heading */}
    <div className="flex items-end justify-between mb-7">

        <div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
                Selected Work
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Projects I've built
            </h2>
        </div>

        <span className="hidden md:block text-sm text-gray-600">
            02 projects
        </span>

    </div>


    {/* Project Grid */}

    <div className="grid md:grid-cols-2 gap-4">


        {/* IntervAI */}

        <a
            href="https://intervai-2-client-7n9q.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="
                group
                relative
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.025]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-white/[0.045]
            "
        >

            {/* Top */}

            <div className="flex items-start justify-between">

                <div className="
                    w-10 h-10
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/10
                    flex items-center justify-center
                    text-lg
                ">
                    🤖
                </div>

                <span className="
                    text-gray-600
                    group-hover:text-purple-400
                    transition
                ">
                    ↗
                </span>

            </div>


            {/* Content */}

            <div className="mt-5">

                <div className="flex items-center gap-2">

                    <h3 className="text-lg font-semibold">
                        IntervAI
                    </h3>

                    <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                        AI
                    </span>

                </div>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                    AI-powered mock interview platform that generates
                    questions and evaluates candidate responses.
                </p>

            </div>


            {/* Tech */}

            <div className="mt-5 flex flex-wrap gap-2">

                {["React", "Node.js", "MongoDB", "AI"].map((tech) => (

                    <span
                        key={tech}
                        className="
                            text-[11px]
                            px-2.5
                            py-1
                            rounded-md
                            bg-black/30
                            border border-white/[0.06]
                            text-gray-500
                        "
                    >
                        {tech}
                    </span>

                ))}

            </div>

        </a>


        {/* WanderLust */}

        <a
            href="https://wanderlust-full-stack-vqba.onrender.com/listings"
            target="_blank"
            rel="noreferrer"
            className="
                group
                relative
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.025]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:bg-white/[0.045]
            "
        >

            {/* Top */}

            <div className="flex items-start justify-between">

                <div className="
                    w-10 h-10
                    rounded-xl
                    bg-blue-500/10
                    border border-blue-500/10
                    flex items-center justify-center
                    text-lg
                ">
                    🌍
                </div>

                <span className="
                    text-gray-600
                    group-hover:text-blue-400
                    transition
                ">
                    ↗
                </span>

            </div>


            {/* Content */}

            <div className="mt-5">

                <div className="flex items-center gap-2">

                    <h3 className="text-lg font-semibold">
                        WanderLust
                    </h3>

                    <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                        MERN
                    </span>

                </div>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                    Full-stack travel listing platform with authentication,
                    CRUD operations and cloud image storage.
                </p>

            </div>


            {/* Tech */}

            <div className="mt-5 flex flex-wrap gap-2">

                {["React", "Express", "MongoDB", "Node.js"].map((tech) => (

                    <span
                        key={tech}
                        className="
                            text-[11px]
                            px-2.5
                            py-1
                            rounded-md
                            bg-black/30
                            border border-white/[0.06]
                            text-gray-500
                        "
                    >
                        {tech}
                    </span>

                ))}

            </div>

        </a>

    </div>

</section>


            </main>


            <Footer />

        </div>

    );
}