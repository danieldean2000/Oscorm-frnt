'use client';

import React from 'react';

export default function ToolsTechnologies() {
  const certifications = [
    {
      id: 1,
      name: 'SOC 2',
      image: '/images/services/admin-support/Tools-01.png',
      alt: 'SOC 2 Type 2'
    },
    {
      id: 2,
      name: 'ISO 27001',
      image: '/images/services/admin-support/Tools-02.png',
      alt: 'ISO 27001'
    },
    {
      id: 3,
      name: 'HIPAA',
      image: '/images/services/admin-support/Tools-03.png',
      alt: 'HIPAA Compliance'
    },
    {
      id: 4,
      name: 'CMMI',
      image: '/images/services/admin-support/Tools-04.png',
      alt: 'CMMI Level'
    },
    {
      id: 5,
      name: 'GDPR',
      image: '/images/services/admin-support/Tools-05.png',
      alt: 'GDPR Certified'
    },
    {
      id: 6,
      name: 'ISO 9001',
      image: '/images/services/admin-support/Tools-06.png',
      alt: 'ISO 9001'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Tools & Technologies
          </h2>
         
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-full object-contain"
                title={cert.alt}
              />
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
}
