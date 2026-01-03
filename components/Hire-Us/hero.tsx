'use client';

export default function HireUsHero() {
    return (
        <section className="relative mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex items-center overflow-hidden px-4 sm:px-6 py-8 lg:px-20 lg:py-10">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center relative z-10">

                {/* Content Section */}
                <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 max-w-xl order-2 lg:order-1">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-400 to-emerald-400 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-900 shadow-lg shadow-teal-500/30">
                            AI POWERED
                        </div>
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold border border-white/30 shadow-lg">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden xs:inline">TRUSTED BY 500+ COMPANIES</span>
                            <span className="xs:hidden">TRUSTED BY 500+</span>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
                        Hire Admin Support Specialists
                    </h1>

                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-lg">
                        Hire experienced admin support staff who bring structure, accuracy, and consistency to your workflow. With strong communication and strict compliance, they become a seamless extension of your business.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
                        <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 w-full sm:w-auto text-xs sm:text-sm">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Strategy Call
                        </button>

                        <button className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto text-xs sm:text-sm">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                            Start Pilot Project
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full">
                    <div className="relative group w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]">
                            <img
                                src="/images/hire-us/hero.png"
                                alt="Admin Support Specialists Team"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
