'use client';

import React from 'react';

const stats = [
    { icon: 'users', number: '900+', label: 'Served Clients' },
    { icon: 'project-diagram', number: '1500+', label: 'Successful Projects' },
    { icon: 'user-tie', number: '350+', label: 'Skilled Professionals' },
    { icon: 'clock', number: '5000+', label: 'Scheduled Hours' },
];

const iconMap: Record<string, React.JSX.Element> = {
    'users': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
    ),
    'project-diagram': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
    ),
    'user-tie': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    ),
    'clock': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
    ),
};

export default function StatsSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        Projects Powered by Proven Experts
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">
                        Trusted by industry leaders worldwide
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-5 sm:p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-teal-200">
                                <div className="text-white">
                                    {iconMap[stat.icon]}
                                </div>
                            </div>

                            {/* Number */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5 group-hover:text-teal-600 transition-colors duration-300">
                                {stat.number}
                            </h3>

                            {/* Label */}
                            <p className="text-xs text-slate-600 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
