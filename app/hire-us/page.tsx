'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HireUsHero from '@/components/Hire-Us/hero';
import StatsSection from '@/components/Hire-Us/stats';
import TopSkillsSection from '@/components/Hire-Us/top-skills';
import WhyHireSection from '@/components/Hire-Us/why-hire';
import PortfolioSlider from '@/components/Hire-Us/portfolio-slider';
import TalentPathSection from '@/components/Hire-Us/talent-path';
import ToolsTechnologies from '@/components/Hire-Us/tools-technologies';
import Specialists from '@/components/Hire-Us/specialists';
import CaseStudiesSection from '@/components/Hire-Us/case-studies';
import FaqSection from '@/components/Home/faq';
import CtaSection from '@/components/Home/cta';

export default function HireUsPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />
            <HireUsHero />
            <StatsSection />
            <TopSkillsSection />
            <WhyHireSection />
            <PortfolioSlider />
            <TalentPathSection />
            <ToolsTechnologies />
            <CaseStudiesSection />
            <FaqSection />
            <CtaSection />
            <Specialists />

            <Footer />
        </div>
    );
}