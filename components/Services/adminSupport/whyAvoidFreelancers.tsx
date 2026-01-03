'use client';

import React from 'react';

export default function WhyAvoidFreelancers() {
  const comparisonData = [
    {
      requirement: { icon: '⏱️', text: 'SLA & Reliability Guarantees' },
      freelancer: { icon: '✕', text: 'No delivery guarantee', color: 'red' },
      oscorm: { icon: '✓', text: 'Reliable long-term structure', color: 'green' }
    },
    {
      requirement: { icon: '👥', text: 'Team Availability & Coverage' },
      freelancer: { icon: '✕', text: 'Unpredictable availability', color: 'red' },
      oscorm: { icon: '✓', text: 'Full-time dedicated specialists', color: 'green' }
    },
    {
      requirement: { icon: '⚡', text: 'Time-to-Market Speed' },
      freelancer: { icon: '✕', text: 'Slow & inconsistent output', color: 'red' },
      oscorm: { icon: '✓', text: '48-hour deployment speed', color: 'green' }
    },
    {
      requirement: { icon: '�', text: 'Cost Predictability & Control' },
      freelancer: { icon: '✕', text: 'Expensive with hidden costs', color: 'red' },
      oscorm: { icon: '✓', text: '60-70% more cost-efficient', color: 'green' }
    },
    {
      requirement: { icon: '✅', text: 'Quality Assurance Systems' },
      freelancer: { icon: '✕', text: 'No quality checks', color: 'red' },
      oscorm: { icon: '✓', text: 'PM & QA supervision', color: 'green' }
    },
    {
      requirement: { icon: '🔒', text: 'Compliance & Security' },
      freelancer: { icon: '✕', text: 'No compliance / No NDA assurance', color: 'red' },
      oscorm: { icon: '✓', text: 'NDA + ISO compliant', color: 'green' }
    },
    {
      requirement: { icon: '📊', text: 'Project Governance' },
      freelancer: { icon: '✕', text: 'You manage everything', color: 'red' },
      oscorm: { icon: '✓', text: 'Fully managed workflow', color: 'green' }
    },
    {
      requirement: { icon: '🚀', text: 'Business Continuity' },
      freelancer: { icon: '✕', text: 'No backup if freelancer disappears', color: 'red' },
      oscorm: { icon: '✓', text: 'Backup & replacement included', color: 'green' }
    },
    {
      requirement: { icon: '📈', text: 'Performance Analytics' },
      freelancer: { icon: '✕', text: 'No tracking or monitoring', color: 'red' },
      oscorm: { icon: '✓', text: 'Live tracking & reporting', color: 'green' }
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Growing Brands Avoid Freelancers
          </h2>
          <p className="text-xl text-gray-600">
            Comparing creative operational models for predictable growth
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enterprise Requirements Column */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Enterprise Requirements</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.requirement.icon}</span>
                  <span className="text-sm text-gray-700 font-medium">{item.requirement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Freelancer Model Column */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-red-200">
            <div className="p-6 border-b border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Freelancer Model</h3>
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                Ad-Hoc & Unpredictable
              </span>
            </div>
            <div className="p-6 space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full ${item.freelancer.color === 'red' ? 'bg-red-500' : 'bg-green-500'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-xs font-bold">{item.freelancer.icon}</span>
                  </div>
                  <span className="text-sm text-gray-700">{item.freelancer.text}</span>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-red-700">High Operational Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Oscorm Dedicated Team Column */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-cyan-400">
            <div className="p-6 border-b border-cyan-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oscorm Dedicated Team</h3>
              <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                Strategic Partnership
              </span>
            </div>
            <div className="p-6 space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full ${item.oscorm.color === 'green' ? 'bg-green-500' : 'bg-cyan-500'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-xs font-bold">{item.oscorm.icon}</span>
                  </div>
                  <span className="text-sm text-gray-700">{item.oscorm.text}</span>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-cyan-600">⭐</span>
                  <span className="text-sm font-semibold text-cyan-600">Recommended for Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
