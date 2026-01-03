'use client';

import Header from "@/components/header";
// import Hero from "@/components/Home/hero";
import TrustedByIndustry from "@/components/Home/trusted-by-industry";
import WhyChooseOscorm from "@/components/Home/why-choose-oscorm";
import HireBySkill from "@/components/Home/hire-by-skill";
import AiTransparency from "@/components/Home/ai-transparency";
import Testimonials from "@/components/Home/testimonial";
import Faq from "@/components/Home/faq";
import CtaSection from "@/components/Home/cta";
import Hero1 from "@/components/Home/hero1";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex flex-col">
        {/* Hero Section */}
        {/* <Hero /> */}

        {/* Second Hero Section */}
        <Hero1 />

        {/* Trusted By Industry Leaders */}
        <TrustedByIndustry />

        {/* Why Choose Oscorm */}
        <WhyChooseOscorm />

        {/* Hire By Skill */}
        <HireBySkill />

        {/* Ai Transparency */}
        <AiTransparency />

        {/* Testimonials */}
        <Testimonials />

        {/* Faq */}
        <Faq />

        {/* CTA Section */}
        <CtaSection />

        {/* Future Sections can be added here */}
      </main>

      {/* Footer will go here */}
      <Footer />
    </div>
  );
}
