'use client';

import React from 'react';

export default function PortfolioShowcase() {
  const portfolioItems = [
    {
      id: 1,
      Brand: 'Brand Identity',
    heading: 'Tech Startup Rebrand',
      title: 'Complete visual identity system for Series B funded company',
      image: '/images/services/admin-support/Engagement.png'
    },

   

    {
      id: 2,
      Brand: 'Brand Identity',
    heading: 'Tech Startup Rebrand',
      title: 'Complete visual identity system for Series B funded company',
      image: '/images/services/admin-support/Engagement2.png'
    },
    {
      id: 3,
      Brand: 'Brand Identity',
    heading: 'Tech Startup Rebrand',
      title: 'Complete visual identity system for Series B funded company',
      image: '/images/services/admin-support/Engagement3.png'
    },
    {
      id: 4,
      Brand: 'Brand Identity',
    heading: 'Tech Startup Rebrand',
      title: 'Complete visual identity system for Series B funded company',
      image: '/images/services/admin-support/Engagement4.png'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            A Glimpse of Our Excellence
          </h2>
          <p className="text-lg text-slate-600">
            Portfolio showcasing our creative achievements
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-72"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wide mb-2">{item.Brand}</span>
                <h3 className="text-white font-bold text-lg mb-2">{item.heading}</h3>
                <p className="text-slate-200 text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
