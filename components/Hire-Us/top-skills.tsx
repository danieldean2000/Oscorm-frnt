'use client';

import React from 'react';

const skills = [
    {
        title: 'Virtual Admin Assistants',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-01.png',
            '/images/hire-us/speak-02.png',
            '/images/hire-us/speak-03.png',
        ],
        color: 'cyan',
    },
    {
        title: 'Data Entry Specialists',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-02.png',
            '/images/hire-us/speak-03.png',
            '/images/hire-us/speak-04.png',
        ],
        color: 'gray',
    },
    {
        title: 'Email Management Specialists',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-01.png',
            '/images/hire-us/speak-03.png',
            '/images/hire-us/speak-04.png',
        ],
        color: 'gray',
    },
    {
        title: 'Research Support Assistants',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-02.png',
            '/images/hire-us/speak-04.png',
            '/images/hire-us/speak-01.png',
        ],
        color: 'gray',
    },
    {
        title: 'Order Processing Support Teams',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-03.png',
            '/images/hire-us/speak-01.png',
            '/images/hire-us/speak-02.png',
        ],
        color: 'gray',
    },
    {
        title: 'Document Management Assistants',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-04.png',
            '/images/hire-us/speak-02.png',
            '/images/hire-us/speak-03.png',
        ],
        color: 'gray',
    },
    {
        title: 'Customer Support Executives',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-01.png',
            '/images/hire-us/speak-04.png',
            '/images/hire-us/speak-02.png',
        ],
        color: 'gray',
    },
    {
        title: 'Calendar & Scheduling Teams',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-03.png',
            '/images/hire-us/speak-02.png',
            '/images/hire-us/speak-01.png',
        ],
        color: 'gray',
    },
    {
        title: 'CRM Operations Assistants',
        rating: 5.0,
        profiles: [
            '/images/hire-us/speak-04.png',
            '/images/hire-us/speak-01.png',
            '/images/hire-us/speak-03.png',
        ],
        color: 'gray',
    },
];

export default function TopSkillsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                        Top Skills Expert
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Specialized talent for every business need
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 hover:border-teal-400"
                        >
                            {/* Rating and Arrow */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-200">
                                    <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-sm font-bold text-slate-900">{skill.rating}</span>
                                </div>

                                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 bg-gray-200 group-hover:bg-teal-500">
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Profile Images */}
                            <div className="flex items-center justify-center mb-5">
                                <div className="flex -space-x-3">
                                    {skill.profiles.map((profile, idx) => (
                                        <div
                                            key={idx}
                                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white"
                                        >
                                            <img
                                                src={profile}
                                                alt={`Profile ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-bold text-slate-600 text-center leading-tight transition-colors duration-300 group-hover:text-teal-600">
                                {skill.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Explore More Skills Button */}
                <div className="flex justify-center mt-8 sm:mt-10">
                    <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                        <span className="text-sm sm:text-base">Explore More Skills</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
