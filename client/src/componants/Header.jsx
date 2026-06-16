
import { Search, Sparkles, NotebookPen } from "lucide-react";

const Header = () => {
    return (
        <div className="px-6 sm:px-16 xl:px-28 relative overflow-hidden">

            <div className="text-center pt-12 pb-8">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 text-sm font-medium mb-8">
                    <Sparkles size={16} />
                    <p>AI Powered Blogging Platform</p>
                </div>
                <section
                    className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/20 rounded-4xl px-6 md:px-16 py-16 md:py-24 shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)] transition-all duration-500">

                    {/* Animated Background */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full animate-pulse" />

                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full animate-pulse" />

                    <div className="relative z-10 flex flex-col items-center">

                        <p className="uppercase tracking-[5px] text-primary font-semibold mb-5 text-sm">
                            Welcome to StackStories
                        </p>

                        <h1
                            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-5xl mb-6 animate-float"><span className="text-gray-900">
                                Every Developer
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Has a Story
                            </span>
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-3xl mb-10">
                            Explore articles on web development, programming,
                            technology, AI, personal growth, and real experiences
                            from the coding journey.
                        </p>

                        <button
                            onClick={() => {
                                document
                                    .getElementById("bloglist")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-2xl text-white flex items-center gap-3 font-semibold shadow-lg hover:scale-105 transition-all duration-300"><NotebookPen size={20} />
                            Explore Articles
                        </button>
                        <form
                            className="flex items-center justify-between w-full max-w-2xl mt-12 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"><div className="flex items-center gap-3 px-5 flex-1">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, tags..."
                                    className="w-full py-4 outline-none text-sm" />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white px-7 py-3 m-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">Search
                            </button>
                        </form>
                    </div>
                </section>
            </div >
        </div >
    )
}

export default Header