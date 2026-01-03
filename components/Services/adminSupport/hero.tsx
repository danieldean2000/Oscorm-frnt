'use client';

import { Calendar, Eye } from 'lucide-react';

export default function AdminSupportHero() {
  const features = [
    'Dedicated UI/UX, Motion & Brand Designers',
    'Project Manager & QA Specialist Included',
    'Real-time Tracking & AI Quality Control',
    'NDA & IP Protection Guaranteed'
  ];

  return (
    <section className="relative mt-20 bg-gradient-to-r from-[#0B1020] to-[#0F4082] min-h-[600px] flex items-center overflow-hidden px-6 py-12 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Top Badges - Left Aligned */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="border border-cyan-400 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[#00d4aa]/20">
            <span className="text-cyan-300 font-bold text-[10px] sm:text-xs">AI-POWERED DESIGN</span>
          </div>
          <div className="border border-slate-400 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-500/20 flex items-center gap-1.5 sm:gap-2">
            <span className="text-slate-200 text-[10px] sm:text-xs">●</span>
            <span className="text-slate-200 font-semibold text-[10px] sm:text-xs">DEDICATED CREATIVE TEAMS</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
                Transform Your Vision Into Impact
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#00d4aa] font-light">AI-Powered Design Teams</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
              <div className="border border-cyan-500/60 rounded-2xl bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6 text-center hover:border-cyan-400 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#00d4aa]">70</p>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">Cost Savings</p>
              </div>
              <div className="border border-cyan-500/60 rounded-2xl bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6 text-center hover:border-cyan-400 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#00d4aa]">48</p>
                <p className="text-slate-300 text-xs sm:text-sm font-medium">Hours to Deploy</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 max-w-md">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2 sm:gap-3 items-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00d4aa] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-200 text-xs sm:text-sm md:text-base font-medium leading-relaxed">• {feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-6">
              <button className="font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group text-xs sm:text-sm bg-gradient-to-r from-[#00d4aa] to-[#2f57c4] text-white hover:shadow-xl hover:scale-105">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="flex flex-col items-center">
                  Get Custom Quote
                  <span className="text-[10px] sm:text-xs font-medium">Free Strategy Session</span>
                </div>
              </button>

              <button className="border-2 border-slate-400 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group bg-transparent hover:bg-slate-900/50 text-xs sm:text-sm">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                View Live Portfolio
              </button>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="hidden lg:grid grid-cols-2 gap-6 auto-rows-max">
            {/* Top Left */}
            <div className="rounded-xl overflow-hidden shadow-2xl group h-56 md:h-72 border-2 border-gray-200">
              <img
                src="/images/services/admin-support/UI.jpg"
                alt="UI Design work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Right */}
            <div className="rounded-xl overflow-hidden shadow-2xl group h-56 md:h-72 border-2 border-gray-200">
              <img
                src="/images/services/admin-support/Brand.jpg"
                alt="Brand Design work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Left */}
            <div className="rounded-xl overflow-hidden shadow-2xl group h-56 md:h-72 border-2 border-gray-200">
              <img
                src="/images/services/admin-support/Web.jpg"
                alt="Web Design work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Right */}
            <div className="rounded-xl overflow-hidden shadow-2xl group h-56 md:h-72 border-2 border-gray-200">
              <img
                src="/images/services/admin-support/Motion.jpg"
                alt="Motion Design work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

