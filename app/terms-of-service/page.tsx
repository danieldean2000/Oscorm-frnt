'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-gradient-to-r from-[#0B1020] to-[#0F4082] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-20">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="text-white max-w-4xl mx-auto relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using Oscorm's AI-powered admin support services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Last Updated */}
        <div className="mb-8 sm:mb-10 p-4 sm:p-6 bg-muted rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground">
            <strong className="text-foreground">Last Updated:</strong>{' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Introduction
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Welcome to Oscorm. These Terms of Service ("Terms") govern your access to and use of our AI-powered platform 
              that connects businesses with experienced admin support specialists. By accessing or using our services, you 
              agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms 
              at any time, and such modifications will be effective immediately upon posting.
            </p>
          </div>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By registering for an account, accessing our platform, or using any of our services, you acknowledge that you have 
            read, understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>
          <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Important:</strong> If you are entering into these Terms on behalf of a 
              company or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            Oscorm provides an AI-powered platform that facilitates connections between businesses and admin support specialists. 
            Our services include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Talent Matching</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                AI-powered matching of businesses with qualified admin support specialists based on requirements and expertise.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Project Management</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Tools and workflows for managing projects, deliverables, and collaboration between clients and specialists.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                AI-enhanced quality monitoring and performance tracking to ensure service excellence.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Payment Processing</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Secure payment processing and billing management for services rendered.
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            User Responsibilities
          </h2>
          <div className="space-y-4">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Account Security</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-3">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Use strong, unique passwords</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Keep your account information up to date</li>
              </ul>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Acceptable Use</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-3">
                You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair 
                our platform.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Do not share false or misleading information</li>
                <li>Do not interfere with the platform's security features</li>
                <li>Do not attempt to reverse engineer or hack our systems</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Payment Terms
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Payment terms will be specified in your service agreement. All fees are non-refundable unless otherwise stated 
              in writing. You agree to pay all applicable fees and taxes associated with your use of our services.
            </p>
            <p>
              We reserve the right to change our pricing with 30 days' notice. Continued use of our services after price 
              changes constitutes acceptance of the new pricing.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To the maximum extent permitted by law, Oscorm shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
          <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-4 sm:p-5 rounded-lg border border-[#2f57c4]/20">
            <p className="text-sm sm:text-base text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Our total liability for any claims arising from or related 
              to these Terms or our services shall not exceed the amount you paid to us in the 12 months preceding the claim.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            If you have questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">Email</p>
                  <p className="text-muted-foreground text-sm sm:text-base">legal@oscorm.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">Address</p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    106, 1st Floor, F294, Sector 63, Noida, UP – 201301 IN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

