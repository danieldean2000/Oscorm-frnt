'use client';

import React from 'react';

export default function RealTimeTrackingSystem() {
  const features = [
    {
      id: 1,
      icon: '/images/services/admin-support/Live-Work-Tracking.png',
      title: 'Live Work Tracking',
      description: 'Monitor tasks in real-time with screenshots and progress updates'
    },
    {
      id: 2,
      icon: '/images/services/admin-support/AI-Activity-Insights.png',
      title: 'AI Activity Insights',
      description: 'Smart analytics on team productivity and performance patterns'
    },
    {
      id: 3,
      icon: '/images/services/admin-support/Task-Level-Transparency.png',
      title: 'Task-Level Transparency',
      description: 'Detailed progress tracking at individual task level with milestones'
    },
    {
      id: 4,
      icon: '/images/services/admin-support/PM-Verified-Reports.png',
      title: 'PM-Verified Reports',
      description: 'Project manager validated progress reports with quality assurance'
    },
    {
      id: 5,
      icon: '/images/services/admin-support/Time-Output-Logs.png',
      title: 'Time & Output Logs',
      description: 'Accurate time tracking and output measurement with analytics'
    },
    {
      id: 6,
      icon: '/images/services/admin-support/Centralized-File-Delivery.png',
      title: 'Centralized File Delivery',
      description: 'All files delivered through secure central system with version control'
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Real-Time Tracking System
          </h2>
          <p className="text-lg text-slate-600">
            Complete visibility into your creative workflow
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left - Dashboard Image */}
          <div className="w-full order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-slate-900 w-full min-h-[360px] md:min-h-[420px] lg:min-h-[520px] h-full">
              <img
                src="/images/services/admin-support/pc.png"
                alt="Real-Time Tracking Dashboard"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="w-full order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[360px] md:min-h-[420px] lg:min-h-[520px]">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
