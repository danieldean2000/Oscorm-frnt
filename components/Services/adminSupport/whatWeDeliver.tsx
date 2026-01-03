'use client';

import React from 'react';
import { Palette, Hash, LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string | LucideIcon;
  isImage?: boolean;
}

export default function WhatWeDeliver() {
  const services: Service[] = [
    {
      id: 1,
      title: 'UI/UX & Web Design Services',
      description: 'High-quality UI/UX and web designing with in-house designers, overseen by PMs, and supported by AI-based quality assurance.',
      icon: '/images/services/admin-support/logo-1.png',
      isImage: true
    },
    {
      id: 2,
      title: 'Animation Services',
      description: 'Bring your concepts to life through animation and motion teams - all managed, trained and monitored professionals.',
      icon: '/images/services/admin-support/logo-2.png',
      isImage: true
    },
    {
      id: 3,
      title: 'Audio Production & Voice Services',
      description: 'Sound engineers, voice artists, and audio editors to create the audio identity of your brand within our secure platform.',
      icon: '/images/services/admin-support/logo-3.png',
      isImage: true
    },
    {
      id: 4,
      title: 'Specialized Creative Services',
      description: 'Niche creative professionals for product photography, illustration and visual storytelling.',
      icon: '/images/services/admin-support/logo-4.png',
      isImage: true
    },
    {
      id: 5,
      title: 'Interior & Architecture Services',
      description: 'Architectural design and interior visualization with precision and consistency from full-time designers.',
      icon: '/images/services/admin-support/logo-5.png',
      isImage: true
    },
    {
      id: 6,
      title: 'Video Production & Editing',
      description: 'Agency quality editing, filming and direction by managed dedicated offshore outsourcing teams.',
      icon: '/images/services/admin-support/logo-6.png',
      isImage: true
    },
    {
      id: 7,
      title: 'Brand Identity & Logo Design',
      description: 'Complete brand identity systems including logos, color palettes, typography, and brand guidelines.',
      icon: Palette,
      isImage: false
    },
    {
      id: 8,
      title: 'Social Media & Marketing Design',
      description: 'Engaging social media graphics, marketing collateral and campaign assets designed for maximum impact.',
      icon: Hash,
      isImage: false
    }
  ];

  return (
    <section className="bg-muted py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
            What we Deliver
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-light">
            Everything you need to scale your creative operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const IconComponent = !service.isImage && typeof service.icon !== 'string' ? service.icon : null;
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#2f57c4] to-[#00d4aa] shadow-md">
                  {service.isImage ? (
                    <img 
                      src={service.icon as string} 
                      alt={service.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  ) : IconComponent ? (
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
