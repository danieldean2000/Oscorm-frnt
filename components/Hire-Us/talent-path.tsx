'use client';

import React from 'react';

const processSteps = [
    {
        num: 1,
        title: 'Strategic Consultation',
        desc: 'We begin by understanding your goals, required skill sets, workflow expectations, and business priorities to ensure we build the right team for your needs. This step ensures clarity, alignment, and a strong foundation before moving forward.',
        img: '/images/hire-us/WrongTalent.png',
        highlighted: false
    },
    {
        num: 2,
        title: 'Talent Acquisition',
        desc: 'We carefully identify and source top-tier professionals matched to your exact needs.',
        img: '/images/hire-us/RightTalent-2.png',
        highlighted: 'border'
    },
    {
        num: 3,
        title: 'Meet Your Team',
        desc: 'A structured introduction call connects you with your vetted experts and delivery manager.',
        img: '/images/hire-us/RightTalent-3.png',
        highlighted: 'blue'
    },
    {
        num: 4,
        title: 'Compliance Integration',
        desc: 'Delivering excellence with structured reviews, real-time client monitoring, and performance governance.',
        img: '/images/hire-us/sectionTwo-1.png',
        highlighted: false
    },
    {
        num: 5,
        title: 'Project Deployment',
        desc: 'Delivering excellence with structured reviews, real-time client monitoring, and performance governance.',
        img: '/images/hire-us/sectionTwo-2.png',
        highlighted: false
    },
    {
        num: 6,
        title: 'Quality Governance',
        desc: 'Delivering excellence with structured reviews, real-time client monitoring, and performance governance.',
        img: '/images/hire-us/sectionTwo-3.png',
        highlighted: false
    },
];

export default function TalentPathSection() {
    return (
        <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                        Your Path to the Right Talent
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Streamlined process for perfect team matching
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-wrap -mx-3">
                        {processSteps.map((step) => (
                            <div
                                key={step.num}
                                className="w-full md:w-1/2 py-2 px-3"
                            >
                                <div
                                    className="group relative rounded-2xl p-4 lg:p-5 h-full flex flex-col transition-all duration-300 ease-out bg-white shadow-md hover:shadow-lg border border-gray-100"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -left-3 w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg flex items-center justify-center font-bold text-base lg:text-lg z-20 transition-transform duration-200 group-hover:scale-105">
                                        {step.num}
                                    </div>

                                    {/* Image Container - Reduced Size */}
                                    <div className="mt-4 lg:mt-5 mb-3 lg:mb-4 flex items-center justify-center h-[90px] lg:h-[100px] relative">
                                        <img
                                            src={step.img}
                                            alt={step.title}
                                            className="w-auto h-full max-w-[70%] object-contain transition-opacity duration-300 group-hover:opacity-90"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center text-gray-900">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm lg:text-base leading-relaxed text-center text-gray-600">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
