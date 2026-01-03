'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface ContactUsProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  bestTime: string;
  topic: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactUs({ className = "" }: ContactUsProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    bestTime: 'any',
    topic: 'general'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Update character count for message
    if (name === 'message') {
      setMessageCharCount(value.length);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        bestTime: 'any',
        topic: 'general'
      });
      setMessageCharCount(0);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[350px] sm:h-[400px] bg-cover bg-center flex items-center justify-center text-center mb-[40px] md:mb-[60px] px-4" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl">
          <h1 className="text-[2.2rem] sm:text-[2.5rem] md:text-[2.8rem] font-semibold mb-3 md:mb-5">Contact Us</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-4xl mx-auto">
            Have questions or need assistance? Our team is here to help with any inquiries about our services or technical support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-4 sm:px-5">
        {/* Form and Contact Info Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-16">
          {/* Contact Form Section - Left */}
          <section className="contact-form-section">
            <div className="section-title mb-[20px] sm:mb-[30px]">
              <h2 className="text-sm sm:text-base md:text-base font-semibold uppercase tracking-[0.5px] text-[#333] mb-[20px] sm:mb-[25px]">
                GET IN TOUCH
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Topic Selection */}
              <div className="form-group mb-[25px]">
                <label htmlFor="topic" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Inquiry Topic *
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#333] bg-[#f9f9f9] focus:bg-white transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales & Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group mb-[25px] relative">
                <label htmlFor="name" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-control w-full px-4 py-3 border rounded focus:outline-none focus:bg-white transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-[#f9f9f9] focus:border-[#333]'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="form-group mb-[25px] relative">
                <label htmlFor="email" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-control w-full px-4 py-3 border rounded focus:outline-none focus:bg-white transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-[#f9f9f9] focus:border-[#333]'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="form-group mb-[25px]">
                <label htmlFor="phone" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#333] bg-[#f9f9f9] focus:bg-white transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Best Time to Contact */}
              <div className="form-group mb-[25px]">
                <label htmlFor="bestTime" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Best Time to Contact
                </label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleInputChange}
                  className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#333] bg-[#f9f9f9] focus:bg-white transition-colors"
                >
                  <option value="any">Anytime</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 7PM)</option>
                </select>
              </div>

              <div className="form-group mb-[25px] relative">
                <label htmlFor="subject" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-control w-full px-4 py-3 border rounded focus:outline-none focus:bg-white transition-colors ${
                    errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-[#f9f9f9] focus:border-[#333]'
                  }`}
                  placeholder="Enter your subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="form-group mb-[25px] relative">
                <label htmlFor="message" className="block text-sm md:text-xs font-semibold uppercase tracking-[0.5px] text-[#666] mb-2">
                  Message *
                  <span className="text-xs text-[#999] ml-2">({messageCharCount}/500 characters)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-control w-full px-4 py-3 border rounded focus:outline-none focus:bg-white transition-colors resize-vertical ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-[#f9f9f9] focus:border-[#333]'
                  }`}
                  placeholder="Please provide details about your inquiry..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
                <div className="text-xs text-[#999] mt-1 text-right">
                  {messageCharCount}/500 characters
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-700 text-sm font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn py-3.5 px-8 rounded text-sm md:text-xs font-semibold uppercase tracking-[1px] cursor-pointer transition-all duration-300 mt-2.5 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-[#333] text-white border-none hover:bg-[#555]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </section>

          {/* Contact Information Section - Right */}
          <section className="contact-info-section">
            <div className="section-title mb-[30px]">
              <h2 className="text-base md:text-sm font-semibold uppercase tracking-[0.5px] text-[#333] mb-[25px]">
                CONTACT INFORMATION
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="info-item group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#333] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="icon-wrapper flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333] group-hover:text-[#555] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#000] mb-2.5">Location</h3>
                    <p className="text-sm text-[#555] leading-relaxed mb-3">
                      106, 1st Floor, F294, Sector 63, Noida, Uttar Pradesh – 2013018 IN
                    </p>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=106,+1st+Floor,+F294,+Sector+63,+Noida,+Uttar+Pradesh+2013018', '_blank')}
                      className="text-xs text-[#333] font-medium hover:text-[#555] transition-colors"
                    >
                      View on Maps →
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="info-item group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#333] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="icon-wrapper flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333] group-hover:text-[#555] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#000] mb-2.5">Email</h3>
                    <div className="space-y-2">
                      <a 
                        href="mailto:info@oscorm.com" 
                        className="text-sm text-[#555] hover:text-[#333] transition-colors block"
                      >
                        info@oscorm.com
                      </a>
                      <a 
                        href="mailto:support@oscorm.com" 
                        className="text-sm text-[#555] hover:text-[#333] transition-colors block"
                      >
                        support@oscorm.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="info-item group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#333] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="icon-wrapper flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333] group-hover:text-[#555] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#000] mb-2.5">Phone</h3>
                    <div className="space-y-2">
                      <a 
                        href="tel:+911234567890" 
                        className="text-sm text-[#555] hover:text-[#333] transition-colors block"
                      >
                        +91 1234567890
                      </a>
                      <p className="text-xs text-[#777]">
                        Mon-Fri, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="info-item group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#333] hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="icon-wrapper flex-shrink-0">
                    <svg className="w-6 h-6 text-[#333] group-hover:text-[#555] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#000] mb-2.5">Business Hours</h3>
                    <div className="space-y-2 text-sm text-[#555]">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Mon - Fri:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sunday:</span>
                        <span className="text-[#777]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Full Width Map Section */}
        <section className="relative w-full h-[500px] bg-gray-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.932544432288!2d77.3647!3d28.6138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb5e7a7f1a1%3A0x1234567890abcdef!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Oscorm Office Location"
          />
        </section>

        {/* Original Content Section */}
        <section className="original-content mt-[50px] pt-[50px] border-t border-gray-200">
          <p className="text-base text-[#444] leading-relaxed mb-5">
            If you have any questions or need assistance, feel free to reach out to us. Our team is here to help with any inquiries you may have. Whether it's about our services or any technical support, we are happy to assist you. Please contact us and we'll get back to you shortly.
          </p>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
