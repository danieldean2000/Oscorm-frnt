'use client';

import React from 'react';
import { motion } from 'framer-motion';

const portfolioImages = [
  '/images/hire-us/Speaks-01.png',
  '/images/hire-us/Speaks-02.png',
  '/images/hire-us/Speaks-03.png',
  '/images/hire-us/Speak-04.png',
  '/images/hire-us/Speak-01.png',
  '/images/hire-us/Speak-02.png',
  '/images/hire-us/Speak-03.png',
];

export default function PortfolioSlider() {
  // Duplicate images for seamless infinite scroll
  const marqueeImages = [...portfolioImages, ...portfolioImages];

  return (
    <section className="bg-white overflow-hidden py-6 sm:py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
            Work That Speaks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            See our expertise in action
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Left Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />

          {/* Right Gradient */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <motion.div
            className="flex w-max gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {marqueeImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 sm:w-32 md:w-40 lg:w-56 xl:w-64 2xl:w-80 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Portfolio work ${(index % portfolioImages.length) + 1}`}
                  className="w-full h-24 sm:h-24 md:h-32 lg:h-44 xl:h-52 2xl:h-64 object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
