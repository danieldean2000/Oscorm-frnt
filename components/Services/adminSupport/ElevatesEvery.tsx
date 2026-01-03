'use client';

import React from 'react';

export default function ElevatesEvery() {
  const leftFeatures = [
    {
      id: 1,
      icon: '/images/services/admin-support/zero.png',
      title: 'Auto Layout Optimization'
    },
    {
      id: 2,
      icon: '/images/services/admin-support/zero-2.png',
      title: 'Accessibility Intelligence'
    },
    {
      id: 3,
      icon: '/images/services/admin-support/zero-3.png',
      title: 'Design QA Automation'
    }
  ];

  const rightFeatures = [
    {
      id: 1,
      icon: '/images/services/admin-support/zero-4.png',
      title: 'Motion Storyboard Generation'
    },
    {
      id: 2,
      icon: '/images/services/admin-support/zero-5.png',
      title: 'Asset Version Diffing'
    },
    {
      id: 3,
      icon: '/images/services/admin-support/zero-5.png',
      title: 'Faster Review Cycles'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0B1020] via-[#0F4082] to-[#0B1020] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,170,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(47,87,196,0.15),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-7xl w-full relative z-10">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            AI That Elevates Every Output
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-3 sm:gap-4 order-2 lg:order-1">
            {leftFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-slate-800/40 to-slate-700/30 backdrop-blur-md border border-slate-600/40 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-[#00d4aa]/60 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#2f57c4] to-[#00d4aa] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* Center - Device Image */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              {/* Enhanced Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-3xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/20 to-[#2f57c4]/20 blur-2xl rounded-full" />
              
              {/* Device container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-500/40 group hover:border-[#00d4aa]/60 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/services/admin-support/Sytem.png"
                  alt="AI Platform Interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-3 sm:gap-4 order-3 lg:order-3">
            {rightFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-slate-800/40 to-slate-700/30 backdrop-blur-md border border-slate-600/40 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-[#00d4aa]/60 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-700/50 transition-all duration-300 hover:shadow-lg hover:translate-x-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#2f57c4] to-[#00d4aa] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
