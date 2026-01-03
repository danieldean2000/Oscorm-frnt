"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How quickly can I deploy a team?",
        answer:
            "Most teams are deployed within 48 hours. This includes talent matching, interviews, tools setup, and project kickoff. For complex requirements, setup may take up to 72 hours.",
    },
    {
        question: "What makes Oscorm different from other platforms?",
        answer:
            "Oscorm combines pre-vetted talent with AI-powered oversight, dedicated project management, and multi-layer quality assurance. We provide complete transparency through real-time dashboards and performance analytics.",
    },
    {
        question: "How are experts vetted and matched?",
        answer:
            "Experts undergo a 5-stage vetting process including technical assessments, portfolio reviews, communication evaluations, and background checks. Our AI matching algorithm considers project requirements, skills, experience, and cultural fit.",
    },
    {
        question: "What's included in the AI oversight?",
        answer:
            "Our AI oversight includes real-time performance tracking, automated quality checks, productivity analytics, predictive project timelines, and intelligent task prioritization. You get detailed reports and insights through our dashboard.",
    },
    {
        question: "Can I scale or change my team as needed?",
        answer:
            "Yes, you can scale your team up or down with 30 days' notice. We handle all transitions smoothly, ensuring project continuity. Additional resources can typically be onboarded within 48 hours.",
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Open first one by default like the image implies or user preference

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-24 bg-white relative" id="faq">
            <div className="container mx-auto max-w-4xl px-4 md:px-6 z-10 relative">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                        Get answers to common questions about our services
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={false}
                            className={cn(
                                "bg-white rounded-xl md:rounded-2xl transition-all duration-300",
                                activeIndex === index
                                    ? "border-2 border-blue-600 shadow-md"
                                    : "border border-gray-100 shadow-sm hover:shadow-md"
                            )}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-5 py-4 md:px-8 md:py-6 flex items-center justify-between gap-4 text-left bg-transparent"
                            >
                                <span className="text-base md:text-lg font-bold text-gray-900">
                                    {faq.question}
                                </span>
                                <span className={cn(
                                    "flex-shrink-0 transition-transform duration-300",
                                    activeIndex === index ? "rotate-180" : ""
                                )}>
                                    <ChevronDown
                                        className={cn(
                                            "w-5 h-5 md:w-6 md:h-6",
                                            activeIndex === index ? "text-teal-500" : "text-blue-600"
                                        )}
                                        strokeWidth={2.5}
                                    />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 pb-5 md:px-8 md:pb-8 pt-0">
                                            <div className="flex gap-4">
                                                {/* The Accent Line from the image */}
                                                <div className="hidden md:block w-1 bg-blue-900 rounded-full flex-shrink-0 min-h-full" />

                                                {/* Mobile accent line (thinner) */}
                                                <div className="md:hidden w-1 bg-blue-900 rounded-full flex-shrink-0 min-h-full" />

                                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
