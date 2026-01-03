'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CookiesPolicy() {
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
            Cookies Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Learn how Oscorm uses cookies and similar technologies to enhance your experience on our platform.
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
            What Are Cookies?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide 
              you with a better experience by remembering your preferences, analyzing how you use our platform, and improving 
              our AI-powered matching algorithms.
            </p>
            <p>
              We use cookies and similar tracking technologies to enhance functionality, provide personalized content, and 
              improve our services.
            </p>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Types of Cookies We Use
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as 
                    security, network management, and accessibility.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing and performance</li>
                    <li>User preferences and settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Page views and navigation patterns</li>
                    <li>Feature usage and engagement metrics</li>
                    <li>Error tracking and performance monitoring</li>
                    <li>AI matching algorithm optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3.14a7.969 7.969 0 01.582 8.722M5.436 13.683A4 4 0 0017 18h1.832c4.1 0 7.625-1.234 9.168-3.14a7.966 7.966 0 01-1.582 4.482" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Personalized content and recommendations</li>
                    <li>Campaign performance tracking</li>
                    <li>Cross-site tracking for retargeting</li>
                    <li>Social media integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            You have the right to control how cookies are used on your device. Here are several ways to manage cookies:
          </p>
          
          <div className="space-y-4">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-3">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse 
                cookies or alert you when cookies are being sent.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy → Cookies</li>
              </ul>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Cookie Consent Banner</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                When you first visit our website, you'll see a cookie consent banner where you can choose which types of 
                cookies to accept. You can change these preferences at any time through our cookie settings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-4 sm:p-5 rounded-lg border border-[#2f57c4]/20">
              <p className="text-sm sm:text-base text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Disabling certain cookies may impact your experience 
                on our platform, as some features may not function properly without them.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Third-Party Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may use third-party services that set cookies on your device. These include:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Analytics providers (Google Analytics, etc.)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Advertising networks and platforms</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Social media platforms</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0"></div>
              <span className="text-muted-foreground">Payment processors</span>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            If you have questions about our use of cookies, please contact us:
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

