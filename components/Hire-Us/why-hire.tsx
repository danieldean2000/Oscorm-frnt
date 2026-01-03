'use client';

import { useState } from 'react';

const slides = [
    {
        title: 'Highly-Vetted & Skilled Specialists',
        description: 'Oscorm teams are built with top-performing professionals who pass through advanced screening, skills evaluation, and industry-standard tests to ensure exceptional capability from day one.',
        buttonText: 'Learn More About Dedicated Designers',
        image: '/images/hire-us/RightTalent.png',
    },
    {
        title: 'AI-Powered Quality Assurance',
        description: 'Our advanced AI systems monitor performance, track productivity, and ensure quality standards are met in real-time, giving you complete visibility and control.',
        buttonText: 'Explore AI Oversight',
        image: '/images/hire-us/RightTalent-2.png',
    },
    {
        title: '48-Hour Team Deployment',
        description: 'Get your specialized team operational within 48 hours. We handle vetting, onboarding, and tool setup so you can focus on results from day one.',
        buttonText: 'Discover Rapid Deployment',
        image: '/images/hire-us/RightTalent-3.png',
    },
];

export default function WhyHireSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-8 sm:py-14 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-6 sm:mb-10">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
                        Why Hire Oscorm Experts
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        Enterprise-grade solutions for modern teams
                    </p>
                </div>

                {/* Slider Container */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">

                        {/* Slides */}
                        <div className="relative min-h-[380px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[450px]">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-10 px-4 pt-6 pb-10 sm:px-5 sm:py-6 md:px-6 md:py-8 lg:p-10 items-center min-h-full">

                                        {/* Content */}
                                        <div className="order-2 lg:order-1 text-white space-y-3 sm:space-y-3 md:space-y-4 text-center lg:text-left w-full px-1 sm:px-0 pb-2 sm:pb-0">
                                            <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold leading-snug sm:leading-tight break-words whitespace-normal">
                                                {slide.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed break-words whitespace-normal px-1 sm:px-0">
                                                {slide.description}
                                            </p>
                                            <button className="inline-flex flex-wrap items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-semibold py-2.5 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm md:text-base break-words whitespace-normal text-center w-full sm:w-auto mx-auto sm:mx-0 mt-2 sm:mt-0">
                                                {slide.buttonText}
                                            </button>
                                        </div>

                                        {/* Image */}
                                        <div className="order-1 lg:order-2 flex items-center justify-center mb-3 sm:mb-3 md:mb-0">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-blue-600 w-6'
                                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
