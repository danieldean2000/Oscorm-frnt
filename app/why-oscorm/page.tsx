'use client';

import Header from "@/components/header";
import WhyOscormHero from "@/components/Why-Oscorm/hero";
import ComparisonSection from "@/components/Why-Oscorm/comparison";
import VisibilitySection from "@/components/Why-Oscorm/visibility";
import DedicatedDesignerSection from "@/components/Why-Oscorm/dedicated-designer";
import Footer from "@/components/footer";
import CtaSection from "@/components/Home/cta";
import FaqSection from "@/components/Home/faq";

export default function WhyOscorm() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <WhyOscormHero />
            <ComparisonSection />
            <VisibilitySection />
            <DedicatedDesignerSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </div>
    );
}