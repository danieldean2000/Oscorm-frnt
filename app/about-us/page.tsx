'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface AboutUsProps {
  className?: string;
}

export default function AboutUs({ className = "" }: AboutUsProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[350px] sm:h-[400px] bg-cover bg-center flex items-center justify-center text-center mb-[40px] md:mb-[60px] px-4" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl">
          <h1 className="text-[2.2rem] sm:text-[2.5rem] md:text-[2.8rem] font-semibold mb-3 md:mb-5">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-4xl mx-auto">
            Transforming businesses through innovative technology solutions and exceptional service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-4 sm:px-5">
        
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#333] mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#333] mb-4">Building Tomorrow's Solutions Today</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to revolutionize the technology landscape, OSCORM has been at the forefront of digital innovation since our inception. We started as a small team of passionate developers and have grown into a comprehensive technology solutions provider serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence. We've helped hundreds of businesses transform their operations, enhance their digital presence, and achieve their strategic goals through cutting-edge technology solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we stand as a trusted partner for businesses seeking to leverage technology for growth, innovation, and competitive advantage in an increasingly digital world.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#333] mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the catalyst for digital transformation, enabling our clients to thrive in the modern business landscape through cutting-edge software, strategic consulting, and exceptional service.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#333] mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in technology solutions, recognized for our innovation, reliability, and customer-centric approach. We envision a future where every business, regardless of size, can harness the power of advanced technology to achieve their full potential and make a meaningful impact in their industry.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Core Values</h2>
            <div className="w-20 h-1 bg-[#333] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#333] mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm">We operate with transparency, honesty, and ethical principles in all our interactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#333] mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">We continuously explore new technologies and creative solutions to solve complex challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#333] mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">We believe in the power of teamwork and building strong partnerships with our clients</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#333] mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">We are committed to delivering the highest quality solutions and exceptional service</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-[#333] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden flex-shrink-0">
                <img 
                  src="/images/about-us/bhoopendra gautam.png" 
                  alt="Bhoopendra Gautam" 
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-[#333] mb-1">Bhoopendra Gautam</h4>
                <p className="text-[#666] font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  Visionary leader with 15+ years in tech innovation, driving digital transformation and strategic growth
                </p>
                
                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="mailto:bhoopendra@oscorm.com" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Sarah Martinez" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-[#333] mb-1">Sarah Martinez</h4>
                <p className="text-[#666] font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  Technical architect and innovation specialist with expertise in scalable solutions and emerging technologies
                </p>
                
                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="mailto:sarah@oscorm.com" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Michael Chen" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-[#333] mb-1">Michael Chen</h4>
                <p className="text-[#666] font-medium mb-3">Head of Operations</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  Operational excellence and client success expert, ensuring seamless project delivery and customer satisfaction
                </p>
                
                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="mailto:michael@oscorm.com" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Stats Section */}
        <section className="mb-16 bg-[#333] text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="inline-block bg-[#333] text-white px-8 py-3 rounded font-semibold hover:bg-[#555] transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="inline-block border border-[#333] text-[#333] px-8 py-3 rounded font-semibold hover:bg-[#333] hover:text-white transition-colors"
            >
              Our Services
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
