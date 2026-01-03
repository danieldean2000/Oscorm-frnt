'use client';
import React, { useState, useEffect } from 'react';

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase(prev => prev === 3 ? 1 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCaseChange = (caseNumber: number) => {
    setActiveCase(caseNumber);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            How Clients Scaled With Oscorm
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Real results from real companies
          </p>
          
          {/* Case Study Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => handleCaseChange(1)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCase === 1
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1'
              }`}
            >
              Case Study 01
            </button>
            <button
              onClick={() => handleCaseChange(2)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCase === 2
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1'
              }`}
            >
              Case Study 02
            </button>
            <button
              onClick={() => handleCaseChange(3)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCase === 3
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1'
              }`}
            >
              Case Study 03
            </button>
          </div>
        </div>
        
        {/* Case Study 1 */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center transition-all duration-500 ${
          activeCase === 1 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
        }`}>
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              18 Months to Reduce Manual Admin Load & Increase Executive Responsiveness
            </h3>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Client:</strong> Mid-size Real Estate Brokerage (USA)
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Challenge:</strong> The internal team spent excessive time on repetitive admin tasks including inbox 
              sorting, appointment scheduling, preparing property packets, and following up with leads. 
              Missed responses and delayed coordination caused operational friction and lost opportunities.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Solution:</strong> We deployed a dedicated Virtual Admin Assistant trained in SOP-driven workflows, 
              automated calendar syncing, AI-based email categorization, CRM follow-ups, and WhatsApp + SMS reminders.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Impact:</strong>
            </p>
            <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Inbox efficiency improved 3×</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Follow-up consistency reached 100%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Admin workload dropped from 5 hours/day → 1.2 hours/day</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Team productivity increased 42%</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src="/images/hire-us/Scaled-01.png" 
              alt="Scaling Success" 
              className="rounded-lg sm:rounded-xl shadow-lg max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto w-full sm:w-auto"
            />
          </div>
        </div>
        
        {/* Case Study 2 */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center transition-all duration-500 ${
          activeCase === 2 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
        }`}>
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Scaling E-commerce Operations with Dedicated Support Team
            </h3>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Client:</strong> Global E-commerce Brand (EU)
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Challenge:</strong> The client struggled with order processing delays, inventory management issues, and customer service overload during peak seasons.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Solution:</strong> We implemented a dedicated team of Order Processing Specialists, Inventory Management Assistants, and Customer Support Executives working in shifts to provide 24/7 coverage.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Impact:</strong>
            </p>
            <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Order processing time reduced by 70%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Customer satisfaction rating increased from 3.2 to 4.8</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Inventory accuracy improved to 99.5%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Peak season revenue increased by 65%</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src="/images/hire-us/Scaled-01.png" 
              alt="E-commerce Scaling" 
              className="rounded-lg sm:rounded-xl shadow-lg max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto w-full sm:w-auto"
            />
          </div>
        </div>
        
        {/* Case Study 3 */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center transition-all duration-500 ${
          activeCase === 3 ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
        }`}>
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Healthcare Administration Transformation for 500+ Clinics
            </h3>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Client:</strong> National Healthcare Network (Canada)
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Challenge:</strong> Manual patient scheduling, medical record management, and billing processes were causing significant delays, compliance issues, and patient dissatisfaction across 500+ clinics nationwide.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              <strong>Solution:</strong> Deployed specialized Medical Administrative Teams with HIPAA-compliant systems, automated scheduling software, and dedicated billing specialists.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">
              <strong>Impact:</strong>
            </p>
            <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Patient wait times reduced by 80%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Billing accuracy increased to 99.8%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Administrative costs decreased by 55%</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-gray-700">Patient satisfaction scores increased by 40%</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src="/images/hire-us/Scaled-01.png" 
              alt="Healthcare Transformation" 
              className="rounded-lg sm:rounded-xl shadow-lg max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;