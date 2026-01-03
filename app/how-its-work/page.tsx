'use client';

import ScrollToTop from '@/components/How-Its-Work/scroll-to-top';
import Hero from '@/components/How-Its-Work/hero';
import Foundation from '@/components/How-Its-Work/foundation';
import TalentIdentification from '@/components/How-Its-Work/talent-identification';
import PMDeliverySetup from '@/components/How-Its-Work/pm-delivery-setup';
import ToolsDeployment from '@/components/How-Its-Work/tools-deployment';
import AIEnhancedSetup from '@/components/How-Its-Work/ai-enhanced-setup';
import ProjectExecution from '@/components/How-Its-Work/project-execution';
import QualityFramework from '@/components/How-Its-Work/quality-framework';
import DynamicScaling from '@/components/How-Its-Work/dynamic-scaling';
import Testimonials from '@/components/Home/testimonial';
import Faq from '@/components/Home/faq';
import CtaSection from '@/components/Home/cta';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] pt-16 sm:pt-20">
      <Header />
      <ScrollToTop />
      <Hero />
      <Foundation />
      <TalentIdentification />
      <PMDeliverySetup />
      <ToolsDeployment />
      <AIEnhancedSetup />
      <ProjectExecution />
      <QualityFramework />
      <DynamicScaling />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
    </main>
  );
}