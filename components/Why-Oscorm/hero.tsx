'use client';

export default function WhyOscormHero() {
    return (
        <section className="relative mt-20 bg-slate-900 min-h-screen md:min-h-[600px] flex items-center overflow-hidden px-4 sm:px-6 py-16 lg:px-20 lg:py-12">
            {/* Decorative gradient orbs for visual appeal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

                {/* Content Section */}
                <div className="text-white space-y-5 sm:space-y-6 max-w-2xl order-2 lg:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        Enterprise-Grade Remote Workforce Solutions with AI-Driven Transparency
                    </h1>

                    <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                        Scale your operations with pre-vetted global talent, intelligent oversight, and measurable outcomes.
                        We deliver managed teams with enterprise-grade accountability, real-time visibility, and predictable performance.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-500 hover:to-teal-300 text-white font-semibold py-3.5 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto">
                            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Strategy Call
                        </button>

                        <button className="group flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-semibold py-3.5 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto">
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                            Start Pilot Project
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative bg-gradient-to-br from-slate-800 to-transparent rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl w-full max-w-xl transform transition-transform hover:scale-105 duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
                        <img
                            src="/images/why-oscorm/why-oscorm.png"
                            alt="Enterprise Team Collaboration"
                            className="relative w-full rounded-xl sm:rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
