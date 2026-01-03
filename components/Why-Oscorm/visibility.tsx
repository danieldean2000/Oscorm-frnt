'use client';

const features = [
    {
        title: 'Hour & effort logs',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
        alt: 'Time tracking'
    },
    {
        title: 'Deliverable review notes',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
        alt: 'Review process'
    },
    {
        title: 'Project timelines',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
        alt: 'Timeline management'
    },
    {
        title: 'Performance metrics',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
        alt: 'Analytics dashboard'
    },
];

export default function VisibilitySection() {
    return (
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Real-Time Visibility & Reporting
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Clients access a secure, real-time workspace to track tasks, performance, timelines, and deliverables — all protected with enterprise-grade confidentiality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">

                    {/* Left: Large image card (spans two columns) */}
                    <div className="lg:col-span-2 flex justify-center">
                        <div className="group bg-white rounded-2xl shadow-2xl overflow-hidden w-full transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                alt="Team collaboration and visibility dashboard"
                                className="w-full h-64 sm:h-96 lg:h-[420px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: 2x2 Grid of Cards */}
                    <div className="lg:col-span-1">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="bg-gray-100 rounded-lg h-20 sm:h-24 mb-3 sm:mb-4 overflow-hidden flex items-center justify-center">
                                        <img
                                            src={feature.image}
                                            alt={feature.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-center text-sm sm:text-base">
                                        {feature.title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
