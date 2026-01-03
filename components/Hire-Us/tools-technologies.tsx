'use client';

import React from 'react';

interface ToolsTechnologiesProps {
  className?: string;
}

export default function ToolsTechnologies({ className = "" }: ToolsTechnologiesProps) {
  const tools = [
    {
      id: 1,
      name: 'Tool 1',
      image: '/images/hire-us/Tools-01.png'
    },
    {
      id: 2,
      name: 'Tool 2',
      image: '/images/hire-us/Tools-02.png'
    },
    {
      id: 3,
      name: 'Tool 3',
      image: '/images/hire-us/Tools-03.png'
    },
    {
      id: 4,
      name: 'Tool 4',
      image: '/images/hire-us/Tools-04.png'
    }
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Tools & Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Assigning vetted experts aligned to your project requirements
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex animate-marquee gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#00D4AA] transition-all duration-300"
                style={{ width: '180px', minWidth: '180px' }}
              >
                <div className="w-full flex items-center justify-center h-16 sm:h-20 lg:h-24">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full max-w-none object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
}
