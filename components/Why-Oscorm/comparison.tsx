'use client';

const comparisonCards = [
    { title: 'Freelancer Marketplaces', description: 'Too risky. No control, no visibility' },
    { title: 'Outsourcing Agencies', description: 'Opaque, slow, unpredictable quality' },
    { title: 'Recruiters', description: 'High cost, no delivery responsibility' },
    { title: 'BPOs & Consultancies', description: 'Rigid, expensive, limited flexibility' },
];

export default function ComparisonSection() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Why Choose Oscorm Over Traditional Solutions?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Compare our AI-powered workforce solution against traditional approaches
                    </p>
                </div>

                {/* Mobile & Tablet: Grid Layout */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {comparisonCards.map((card, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-50">
                                    <img
                                        src="/images/why-oscorm/why-oscorm.png"
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Center Card Mobile */}
                    <div className="bg-gradient-to-br from-blue-600 to-teal-400 rounded-3xl p-6 sm:p-8 text-white shadow-2xl text-center">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                            ★ Recommended
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Oscorm</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                            AI-powered structured workforce with enterprise-grade transparency, monitoring and trust. Get real-time visibility, managed accountability, and predictable performance.
                        </p>
                        <div className="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium inline-block hover:bg-white/25 transition-colors duration-300">
                            Not freelancers. A real workforce system.
                        </div>
                    </div>
                </div>

                {/* Desktop: Absolute Position Layout */}
                <div className="hidden lg:flex relative items-center justify-center min-h-[600px]">
                    {/* Top Left Card */}
                    <div className="absolute top-0 left-0 group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300 max-w-xs">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Freelancer Marketplaces</h3>
                        <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src="/images/why-oscorm/why-oscorm.png"
                                alt="Freelancer"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-gray-600">Too risky. No control, no visibility</p>
                    </div>

                    {/* Top Right Card */}
                    <div className="absolute top-0 right-0 group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300 max-w-xs">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Outsourcing Agencies</h3>
                        <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src="/images/why-oscorm/why-oscorm.png"
                                alt="Agencies"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-gray-600">Opaque, slow, unpredictable quality</p>
                    </div>

                    {/* Center Main Card */}
                    <div className="relative z-10 bg-gradient-to-r from-blue-600 to-teal-400 rounded-3xl p-10 text-white shadow-2xl border border-white/20 max-w-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            ★ Recommended
                        </div>
                        <h3 className="text-4xl font-bold mb-6">Oscorm</h3>
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                            AI-powered structured workforce with enterprise-grade transparency, monitoring and trust. Get real-time visibility, managed accountability, and predictable performance.
                        </p>
                        <div className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium inline-block hover:bg-white/25 transition-colors duration-300">
                            Not freelancers. A real workforce system.
                        </div>
                    </div>

                    {/* Bottom Left Card */}
                    <div className="absolute bottom-0 left-0 group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300 max-w-xs">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Recruiters</h3>
                        <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src="/images/why-oscorm/why-oscorm.png"
                                alt="Recruiters"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-gray-600">High cost, no delivery responsibility</p>
                    </div>

                    {/* Bottom Right Card */}
                    <div className="absolute bottom-0 right-0 group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-gray-200 transition-all duration-300 max-w-xs">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">BPOs & Consultancies</h3>
                        <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src="/images/why-oscorm/why-oscorm.png"
                                alt="BPOs"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-gray-600">Rigid, expensive, limited flexibility</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
