'use client';

import React from 'react';

interface SpecialistsProps {
  className?: string;
}

export default function Specialists({ className = "" }: SpecialistsProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-[#F7F9FC] ${className}`} id="specialists">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Top-Tier Admin & Support Specialists
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to build and manage successful projects
          </p>
        </div>
        
        <div>
          {/* Customer Support Roles - 11 roles */}
          <div className="mb-12 sm:mb-16">
            <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1020] mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-[#00D4AA]">
              Customer Support Roles
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Customer Service Representatives
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Live Chat Support Agents
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Zendesk Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Zoom Meeting Coordinators
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Customer Support Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Customer Success Managers
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Salesforce Support Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Call Center Support Agents
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Phone Support Agents
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Helpdesk Support Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Account Managers
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Data Processing Roles - 11 roles */}
          <div className="mb-12 sm:mb-16">
            <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1020] mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-[#00D4AA]">
              Data Processing Roles
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Entry Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Annotators
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Document Conversion Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Normalization Assistants
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Typing & Transcription Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Auditing Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    PDF Formatting Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Extraction Assistants
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Data Collection Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Google Sheets & Excel Experts
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Spreadsheet Management Specialists
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Executive Assistance Roles - 12 roles */}
          <div className="mb-12 sm:mb-16">
            <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1020] mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-[#00D4AA]">
              Executive Assistance Roles
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Virtual Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Administrative Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Calendar Management Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Real Estate Virtual Assistants
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Personal Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Administrative Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Recruitment & HR Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Amazon Virtual Assistants
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00D4AA] transition-all duration-300">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Executive Assistants
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Appointment Setters
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 border-b border-gray-100 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Cold Calling Specialists
                  </li>
                  <li className="py-2 sm:py-3 text-gray-600 pl-5 sm:pl-6 relative hover:text-[#2f57c4] hover:translate-x-1 transition-all duration-300 before:content-['•'] before:text-[#00D4AA] before:font-bold before:text-lg sm:before:text-xl before:absolute before:left-0">
                    Project Coordination Assistants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
