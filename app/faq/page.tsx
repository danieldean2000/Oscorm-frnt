'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FaqSection from '@/components/Home/faq';

interface FaqPageProps {
  className?: string;
}

export default function FaqPage({ className = "" }: FaqPageProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] sm:h-[450px] bg-cover bg-center flex items-center justify-center text-center mb-[60px] md:mb-[80px] px-4" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-semibold mb-4 md:mb-6">Frequently Asked Questions</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business succeed.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-5 md:px-4">
        {/* FAQ Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Common Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to frequently asked questions about our services and processes
          </p>
        </div>

        <main className="pb-20">
          <FaqSection />
        </main>
      </div>

      {/* Additional Help Section */}
      <section className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. Get in touch with us and we'll be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="inline-block bg-[#333] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#555] transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="mailto:info@oscorm.com" 
              className="inline-block border-2 border-[#333] text-[#333] px-8 py-3 rounded-lg font-semibold hover:bg-[#333] hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
