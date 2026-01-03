'use client';

import React from 'react';
import { Users, Clock, Brain, Shield, UserCog, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: "Managed Talent",
        description: "Pre-vetted experts matched to your specific needs with continuous performance management."
    },
    {
        icon: Clock,
        title: "48-Hour Deployment",
        description: "Rapid team setup with tools, access, and KPIs configured within two business days."
    },
    {
        icon: Brain,
        title: "AI-Powered Oversight",
        description: "Real-time performance dashboards, automated QA, and intelligent insights."
    },
    {
        icon: Shield,
        title: "Multi-Layer QA",
        description: "Comprehensive quality assurance with AI checks and human review processes."
    },
    {
        icon: UserCog,
        title: "Dedicated PM",
        description: "Professional project management ensuring seamless communication and delivery."
    },
    {
        icon: TrendingUp, // Using TrendingUp for Cost Efficiency/Charts
        title: "Cost Efficiency",
        description: "Up to 40% savings compared to traditional hiring with transparent pricing."
    }
];

const WhyChooseOscorm = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
                        Why Teams Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)]">Oscorm</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Enterprise-grade solutions for modern teams
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-teal)] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7" strokeWidth={2} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseOscorm;
