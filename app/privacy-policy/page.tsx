'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface PrivacyPolicyProps {
  className?: string;
}

export default function PrivacyPolicy({ className = "" }: PrivacyPolicyProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Header />
      {/* Hero Banner */}
      <section className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-gradient-to-r from-[#0B1020] to-[#0F4082] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-20">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="text-white max-w-4xl mx-auto relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Oscorm's AI-powered admin support services.
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
              Welcome to Oscorm, an AI-powered platform that connects businesses with experienced admin support specialists. 
              We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we 
              collect, use, and protect your information when you use our website and services.
            </p>
            <p>
              By using Oscorm's services, including our AI-enhanced talent matching, project management tools, and admin support 
              solutions, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Information We Collect
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Name and contact details (email, phone number, business address)</li>
                <li>Account credentials and authentication information</li>
                <li>Communication preferences and marketing consent</li>
                <li>Professional information (company details, job title, business requirements)</li>
                <li>Project specifications and admin support needs</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Technical Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>IP address and device information</li>
                <li>Browser type and version, operating system</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data, analytics information, and platform interactions</li>
                <li>AI system interaction data for service improvement</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Communication & Project Data
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Messages, support inquiries, and customer service interactions</li>
                <li>Feedback, survey responses, and testimonials</li>
                <li>Project requirements, deliverables, and collaboration data</li>
                <li>Workflow preferences and admin support specifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            How We Use Your Information
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Service Delivery
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>• Provide and maintain our AI-powered admin support services</li>
                <li>• Match you with qualified specialists and talent</li>
                <li>• Process transactions and manage project workflows</li>
                <li>• Offer customer support and assistance</li>
                <li>• Personalize your experience with AI recommendations</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Communication
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>• Send important service updates and project notifications</li>
                <li>• Respond to your inquiries and support requests</li>
                <li>• Provide relevant information about admin support solutions</li>
                <li>• Share insights and best practices for workflow optimization</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Analytics & Improvement
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>• Analyze usage patterns and service effectiveness</li>
                <li>• Improve our AI matching algorithms and platform features</li>
                <li>• Conduct research and development for better admin support</li>
                <li>• Monitor system performance and optimize workflows</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Legal & Security
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>• Comply with legal obligations and regulations</li>
                <li>• Protect against fraud, abuse, and security threats</li>
                <li>• Ensure platform security and data integrity</li>
                <li>• Enforce our terms of service and user agreements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Data Protection & Security
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
            access, alteration, disclosure, or destruction. These include:
          </p>
          <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-5 sm:p-6 rounded-lg border border-[#2f57c4]/20">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-xl">🔒</span>
                <span>SSL encryption for secure data transmission</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🛡️</span>
                <span>Secure servers and enterprise-grade hosting infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🔐</span>
                <span>Regular security audits, updates, and vulnerability assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">👤</span>
                <span>Access controls, authentication systems, and role-based permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📊</span>
                <span>Data minimization, retention policies, and automated backups</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Your Privacy Rights
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <span className="text-2xl sm:text-3xl flex-shrink-0">👁️</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-base sm:text-lg">Access & Review</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Request access to your personal data and review how it's being used in our AI-powered matching and admin support services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <span className="text-2xl sm:text-3xl flex-shrink-0">✏️</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-base sm:text-lg">Correction & Update</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Correct inaccurate or incomplete personal information, including project requirements and admin support preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🗑️</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-base sm:text-lg">Deletion</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Request deletion of your personal data when legally permissible, subject to our retention requirements for active projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <span className="text-2xl sm:text-3xl flex-shrink-0">📤</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-base sm:text-lg">Portability</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Transfer your data to another service provider in a machine-readable format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Cookies & Tracking
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, provide personalized 
            content, and improve our AI-powered matching algorithms. You can control cookie settings through your browser preferences.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 sm:p-5 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Essential Cookies</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Required for basic functionality, security, and authentication on our platform.
              </p>
            </div>
            <div className="p-4 sm:p-5 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Analytics Cookies</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Help us understand how you use our services and improve our AI matching algorithms.
              </p>
            </div>
            <div className="p-4 sm:p-5 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Marketing Cookies</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Used to deliver relevant content about admin support solutions and platform updates.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Sharing */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Third-Party Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            We may share your information with trusted third parties in specific circumstances:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Service providers who assist in operating our AI-powered platform</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Payment processors for secure transaction handling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Analytics providers for usage insights and platform optimization</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Legal authorities when required by law or to protect our rights</span>
            </div>
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            International Data Transfers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data may be transferred to and processed in countries other than your own, including where our admin support 
            specialists are located. We ensure appropriate safeguards are in place to protect your information in accordance 
            with applicable data protection laws, including GDPR, CCPA, and other regional regulations.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Policy Updates
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            We may update this privacy policy from time to time to reflect changes in our practices, legal requirements, 
            or business operations. We will notify you of significant changes through our website, email, or other communication channels.
          </p>
          <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-4 sm:p-5 rounded-lg border border-[#2f57c4]/20">
            <p className="text-sm sm:text-base text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Your continued use of our services after any policy changes 
              constitutes acceptance of the updated privacy policy.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            If you have questions about this privacy policy or how we handle your data, please contact us:
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
                  <p className="text-muted-foreground text-sm sm:text-base">privacy@oscorm.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">Phone</p>
                  <p className="text-muted-foreground text-sm sm:text-base">+91 1234567890</p>
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
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1 text-base sm:text-lg">Response Time</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Within 24-48 hours</p>
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
