'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Security() {
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
            Security
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Learn about the security measures we implement to protect your data and ensure a safe experience on Oscorm.
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
            Our Commitment to Security
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Oscorm, security is our top priority. We implement industry-leading security measures to protect your data, 
              ensure platform integrity, and maintain the trust of our clients and specialists.
            </p>
            <p>
              We continuously monitor, update, and enhance our security infrastructure to stay ahead of emerging threats and 
              maintain the highest standards of data protection.
            </p>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Security Measures
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Data Encryption</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                All data transmitted between your device and our servers is encrypted using SSL/TLS protocols. Data at rest 
                is encrypted using AES-256 encryption.
              </p>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Secure Infrastructure</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our platform is hosted on enterprise-grade cloud infrastructure with redundant systems, regular backups, and 
                disaster recovery protocols.
              </p>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Access Controls</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                We implement role-based access controls, multi-factor authentication, and regular access reviews to ensure 
                only authorized personnel can access sensitive data.
              </p>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Regular Audits</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                We conduct regular security audits, vulnerability assessments, and penetration testing to identify and 
                address potential security issues proactively.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Compliance & Certifications
          </h2>
          <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain compliance with industry standards and regulations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>GDPR (General Data Protection Regulation) compliance</li>
              <li>CCPA (California Consumer Privacy Act) compliance</li>
              <li>SOC 2 Type II certified infrastructure</li>
              <li>ISO 27001 information security management</li>
              <li>Regular third-party security assessments</li>
            </ul>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Incident Response
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the unlikely event of a security incident, we have a comprehensive incident response plan that includes:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Immediate containment and mitigation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Thorough investigation and root cause analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Timely notification to affected users and authorities</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Post-incident review and security enhancements</span>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Security Best Practices for Users
          </h2>
          <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-5 sm:p-6 rounded-lg border border-[#2f57c4]/20">
            <p className="text-muted-foreground leading-relaxed mb-4">
              While we implement robust security measures, you can also help protect your account:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Use a strong, unique password for your account</li>
              <li>Enable multi-factor authentication when available</li>
              <li>Keep your browser and operating system updated</li>
              <li>Be cautious of phishing attempts and suspicious emails</li>
              <li>Log out from shared or public devices</li>
              <li>Report any suspicious activity immediately</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Report Security Issues
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            If you discover a security vulnerability or have concerns about our security practices, please contact us:
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
                  <p className="text-muted-foreground text-sm sm:text-base">security@oscorm.com</p>
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

