'use client';

import React from 'react';

export default function ProvenDeliveryModel() {
  const steps = [
    {
      id: 1,
      title: 'Needs Analysis',
      description: 'We begin by understanding your goals, project requirements, and team needs. Whether you need services or dedicated talent, everything starts with clarity.',
      image: '/images/services/admin-support/Model-1.png',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200'
    },
    {
      id: 2,
      title: 'Scope Plan',
      description: 'Our experts chart the workflow, deliverables, schedules, and skill sets needed. This ensures your project or team is designed for efficiency from the start.',
      image: '/images/services/admin-support/Model-2.png',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200'
    },
    {
      id: 3,
      title: 'Solution Offer',
      description: 'You receive a customized proposal with pricing options for services or team employment. We match you with the right experts, tools, and engagement model.',
      image: '/images/services/admin-support/Model-3.png',
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
      borderColor: 'border-blue-700'
    },
    {
      id: 4,
      title: 'Team Onboarding',
      description: 'Once approved, we onboard your dedicated team or service team with comprehensive training, processes, and integration with your existing systems and workflows.',
      image: '/images/services/admin-support/Model-4.png',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200'
    },
    {
      id: 5,
      title: 'Performance Delivery',
      description: 'Your team delivers on schedule with real-time tracking, quality assurance checks, and regular communication. We ensure consistent excellence at every milestone.',
      image: '/images/services/admin-support/Model-5.png',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200'
    },
    {
      id: 6,
      title: 'Continuous Optimization',
      description: 'We monitor performance analytics, gather feedback, and optimize processes continuously. Your success is our ongoing commitment with regular reviews and improvements.',
      image: '/images/services/admin-support/Model-6.png',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      borderColor: 'border-slate-200'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
            Our Proven Delivery Model
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            A streamlined 6-step process from consultation to deployment
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => {
            const isHighlighted = step.bgColor === 'bg-blue-700';
            return (
              <div
                key={step.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                  isHighlighted 
                    ? 'bg-gradient-to-br from-[#2f57c4] to-[#1e3a8a] border-0 shadow-xl' 
                    : 'bg-white border border-gray-200 hover:border-[#00d4aa]/50 shadow-lg'
                }`}
              >
                {/* Image Section */}
                <div className={`relative w-full h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden ${
                  isHighlighted 
                    ? 'bg-gradient-to-br from-[#2f57c4] to-[#1e3a8a]' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                  {/* Step Number Badge */}
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full font-bold text-lg sm:text-xl mb-4 -mt-20 relative z-10 mx-auto shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    isHighlighted
                      ? 'bg-gradient-to-br from-[#00d4aa] to-[#00b894] text-white'
                      : 'bg-gradient-to-br from-[#2f57c4] to-[#00d4aa] text-white'
                  }`}>
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center leading-tight ${
                    isHighlighted ? 'text-white' : 'text-slate-900'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed text-center flex-grow ${
                    isHighlighted ? 'text-blue-100' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 font-medium">
            Ready to transform your creative operations?
          </p>
          <button className="bg-gradient-to-r from-[#2f57c4] to-[#00d4aa] hover:from-[#1e3a8a] hover:to-[#00b894] text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

