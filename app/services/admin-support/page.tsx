'use client';

import Header from "@/components/header";
import AdminSupportHero from "@/components/Services/adminSupport/hero";
import WhatWeDeliver from "@/components/Services/adminSupport/whatWeDeliver";
import WhyAvoidFreelancers from "@/components/Services/adminSupport/whyAvoidFreelancers";
import ProvenDeliveryModel from "@/components/Services/adminSupport/provenDeliveryModel";
import RealTimeTrackingSystem from "@/components/Services/adminSupport/realTimeTrackingSystem";
import EngagementSlider from "@/components/Services/adminSupport/engagementSlider";
import ToolsTechnologies from "@/components/Hire-Us/tools-technologies";
import PortfolioShowcase from "@/components/Services/adminSupport/portfolioShowcase";
import ElevatesEvery from "@/components/Services/adminSupport/ElevatesEvery";
import Footer from "@/components/footer";
import TrustedByIndustry from "@/components/Home/trusted-by-industry";

export default function adminSupport() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <AdminSupportHero />
      <TrustedByIndustry />

<WhatWeDeliver />

<WhyAvoidFreelancers />

<ProvenDeliveryModel />

<RealTimeTrackingSystem />

<EngagementSlider />

<ToolsTechnologies />

<ElevatesEvery />

<PortfolioShowcase />

<Footer />  
    </div>
  );
}
