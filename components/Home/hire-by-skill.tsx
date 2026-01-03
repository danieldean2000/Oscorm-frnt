"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Bot,
    Megaphone,
    Settings,
    PenTool,
    Scale,
    Headset,
    Code2,
    Palette,
    GraduationCap,
    ShoppingCart,
    TrendingUp,
    ArrowRight,
    Users,
    Clock,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "AI & Innovation Services",
        experts: "250+",
        setup: "48-Hour",
        icon: Bot,
        image: "/images/home/services/AI-2.jpg",
        link: "#",
        cta: "Explore Services",
        size: "lg",
    },
    {
        title: "Marketing Services",
        experts: "180+",
        icon: Megaphone,
        image: "/images/home/services/market.jpg",
        link: "#",
        cta: "View Details",
        size: "sm",
    },
    {
        title: "Engineering Services",
        experts: "320+",
        icon: Settings,
        image: "/images/home/services/Engineering.png",
        link: "#",
        cta: "Discover",
        size: "sm",
    },
    {
        title: "Content Services",
        experts: "150+",
        icon: PenTool,
        image: "/images/home/services/Writing.jpg",
        link: "#",
        cta: "Read More",
        size: "sm",
    },
    {
        title: "Legal Services",
        experts: "90+",
        icon: Scale,
        image: "/images/home/services/Law.jpg",
        link: "#",
        cta: "Explore",
        size: "sm",
    },
    {
        title: "Admin Support Services",
        experts: "200+",
        icon: Headset,
        image: "/images/home/services/Admin.png",
        link: "#",
        cta: "Get Started",
        size: "sm",
    },
    {
        title: "Development & Tech Services",
        experts: "400+",
        setup: "24-Hour",
        icon: Code2,
        image: "/images/home/services/Tech.jpg",
        link: "#",
        cta: "View Details",
        size: "lg",
    },
    {
        title: "Creative Design Services",
        experts: "120+",
        icon: Palette,
        image: "/images/home/services/Creative.jpg",
        link: "#",
        cta: "See Portfolio",
        size: "sm",
    },
    {
        title: "Talent Development Services",
        experts: "80+",
        icon: GraduationCap,
        image: "/images/home/services/Development.jpg",
        link: "#",
        cta: "Browse",
        size: "sm",
    },
    {
        title: "Ecommerce Operations",
        experts: "110+",
        icon: ShoppingCart,
        image: "/images/home/services/Ecommerce.jpg",
        link: "#",
        cta: "Boost Sales",
        size: "sm",
    },
    // Finance is span 3
    {
        title: "Finance & Accounting Services",
        experts: "140+",
        badge: "Certified",
        icon: TrendingUp,
        image: "/images/home/services/DigitalSuccess11.png",
        link: "#",
        cta: "Get Insights",
        size: "full", // Custom size handler
    }
];

export default function HireBySkill() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="services">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-black bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)]">
                        Hire by Skill or Project
                    </h2>
                    <p className="text-lg text-slate-600">
                        Specialized talent across every business function, ready to integrate into your team.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative rounded-3xl overflow-hidden h-[320px] cursor-pointer bg-slate-900 border border-slate-200/20 shadow-lg hover:shadow-2xl transition-all duration-500",
                                service.size === "lg" && "lg:col-span-2",
                                service.size === "full" && "lg:col-span-3"
                            )}
                        >
                            {/* Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay - Only visible on Hover for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content - Hidden initially, shown on hover */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {/* Icon */}
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2",
                                    "bg-gradient-to-br from-blue-500 to-cyan-400"
                                )}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--brand-teal)] transition-colors">
                                    {service.title}
                                </h3>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm font-medium mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <span className="flex items-center gap-2">
                                        <Users className="w-4 h-4" /> {service.experts} Experts
                                    </span>
                                    {service.setup && (
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" /> {service.setup} Setup
                                        </span>
                                    )}
                                    {service.badge && (
                                        <span className="flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4" /> {service.badge}
                                        </span>
                                    )}
                                </div>

                                {/* CTA */}
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-[var(--brand-teal)] font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all"
                                >
                                    {service.cta} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
