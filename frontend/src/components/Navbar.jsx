export default function Navbar(){
    return (
        <nav className="fixed  top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-url">

            <div className="max-w-5xl mx-3 my-3 flex items-center justify-between ">
                {/* Ḷogo */}
                <a href="/"
                className="flex items-center"
                 >
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from blue-500 via-purple-500 to-pink-500 flex items-center justify-center 
                 font-bold shadow-lg shadow-purple-500/20">
                    M
                 </div>
                 <div>
                    <h2 className="font-semibold text-white">Mohar Singh Yadav - Portfolio   </h2>
                    {/* <p className="text-xs text-gray-500">Portfolio</p> */}
                 </div>
                </a>



                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm">


                    <a href="https://leetcode.com/u/cXAHUiiEtl/"
                    >
                         LeetCode
                         
                    </a>
                    <a 
                    href="https://github.com/moharsingh123"
                    target="_blank"
                    rel="noreferrer"

                    className="text-gray-400 hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/mohar-singh-061469297/"
                    target="_blank"
                    rel="noreferrer"

                    className="text-gray-400 hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                </div>
            </div>

        </nav>
    )
}