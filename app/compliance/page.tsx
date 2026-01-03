'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Compliance() {
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
            Compliance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Learn about Oscorm's commitment to regulatory compliance and data protection standards.
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
            Our Compliance Commitment
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Oscorm, we are committed to maintaining the highest standards of regulatory compliance and data protection. 
              We understand the importance of adhering to applicable laws and regulations in all jurisdictions where we operate.
            </p>
            <p>
              Our compliance program is designed to ensure that we meet or exceed legal requirements while protecting the 
              privacy and security of our clients' and specialists' data.
            </p>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Regulatory Compliance
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
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">GDPR Compliance</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    We comply with the General Data Protection Regulation (GDPR) for users in the European Union. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Right to access, rectification, and erasure of personal data</li>
                    <li>Data portability and processing restrictions</li>
                    <li>Privacy by design and default principles</li>
                    <li>Data breach notification requirements</li>
                    <li>Appointment of Data Protection Officer (DPO) where required</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">CCPA Compliance</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    We comply with the California Consumer Privacy Act (CCPA) for California residents. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Non-discrimination for exercising privacy rights</li>
                    <li>Transparent privacy notices and disclosures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Other Regional Regulations</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3">
                    We also comply with other applicable data protection and privacy regulations, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    <li>PIPEDA (Personal Information Protection and Electronic Documents Act) - Canada</li>
                    <li>LGPD (Lei Geral de Proteção de Dados) - Brazil</li>
                    <li>PDPA (Personal Data Protection Act) - Singapore</li>
                    <li>Local data protection laws in India and other jurisdictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Standards */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Industry Standards & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">SOC 2 Type II</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our infrastructure and processes are audited annually for SOC 2 Type II compliance, ensuring security, 
                availability, processing integrity, confidentiality, and privacy.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">ISO 27001</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                We maintain ISO 27001 certification for information security management, demonstrating our commitment 
                to protecting information assets.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">PCI DSS</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Our payment processing complies with PCI DSS standards to ensure secure handling of payment card information.
              </p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-lg border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Regular Audits</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                We undergo regular third-party security audits and assessments to maintain compliance and identify areas for improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Data Processing Agreements */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Data Processing Agreements
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We enter into Data Processing Agreements (DPAs) with our clients and service providers to ensure compliance 
            with data protection regulations. These agreements specify:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">The purpose and scope of data processing</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Security measures and safeguards</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Data retention and deletion policies</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Rights and obligations of all parties</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex-shrink-0 mt-2"></div>
              <span className="text-muted-foreground">Procedures for handling data subject requests</span>
            </div>
          </div>
        </section>

        {/* Compliance Monitoring */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Ongoing Compliance Monitoring
          </h2>
          <div className="bg-gradient-to-r from-[#2f57c4]/10 to-[#00D4AA]/10 p-5 sm:p-6 rounded-lg border border-[#2f57c4]/20">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain an ongoing compliance program that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Regular compliance training for all employees</li>
              <li>Continuous monitoring of regulatory changes</li>
              <li>Periodic risk assessments and gap analyses</li>
              <li>Documentation and record-keeping requirements</li>
              <li>Incident response and breach notification procedures</li>
              <li>Regular reviews and updates of policies and procedures</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Compliance Inquiries
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            For questions about our compliance practices or to request compliance documentation, please contact us:
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
                  <p className="text-muted-foreground text-sm sm:text-base">compliance@oscorm.com</p>
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

