'use client';

export default function DedicatedDesignerSection() {
    return (
        <section className="relative bg-slate-900 min-h-[500px] flex items-center overflow-hidden px-4 sm:px-6 py-12 lg:px-20 rounded-none sm:rounded-3xl mx-0 sm:mx-4 my-8 sm:my-12">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

                {/* Content Section */}
                <div className="text-white space-y-4 sm:space-y-6 max-w-2xl order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                        Dedicated Designer
                    </h2>

                    <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                        We assign a full-time, in-house designer to your account who works exclusively on your tasks. That designer is managed by a Project Manager, passes through QA and AI checks, and delivers steady weekly/monthly output with full visibility via our tracking dashboard.
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative bg-gradient-to-br from-slate-800 to-transparent rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl w-full max-w-full transform hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
                        <img
                            src="/images/why-oscorm/Engagement.png"
                            alt="Dedicated designer engagement model"
                            className="relative w-full rounded-xl sm:rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
