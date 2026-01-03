"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingFaqs = [
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards, debit cards, and bank transfers. For Enterprise plans, we also offer invoicing with net-30 payment terms.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Yes, absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits accordingly.",
    },
    {
        question: "Is there a setup fee?",
        answer:
            "No, there are no setup fees for any of our plans. You only pay for the subscription cost based on your chosen plan and billing cycle.",
    },
    {
        question: "What happens if I exceed my plan limits?",
        answer:
            "If you exceed your plan limits, we'll notify you and offer options to upgrade your plan. We won't charge overage fees without your explicit approval.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "Yes, we offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, we'll provide a full refund.",
    },
    {
        question: "Are there any hidden fees?",
        answer:
            "No hidden fees. The price you see is what you pay. The only additional costs would be for optional add-on services or if you choose to upgrade your plan.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period.",
    },
    {
        question: "What's the difference between monthly and annual billing?",
        answer:
            "Annual billing offers a 20% discount compared to monthly billing. You pay upfront for the year, but you save significantly and get the same features and support.",
    },
];

export default function PricingFaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
                {pricingFaqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={false}
                        className={cn(
                            "bg-white rounded-xl transition-all duration-300",
                            activeIndex === index
                                ? "border-2 border-gray-300 shadow-md"
                                : "border border-gray-200 shadow-sm hover:shadow-md"
                        )}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-transparent"
                        >
                            <span className="text-base md:text-lg font-semibold text-[#333]">
                                {faq.question}
                            </span>
                            <span className={cn(
                                "flex-shrink-0 transition-transform duration-300",
                                activeIndex === index ? "rotate-180" : ""
                            )}>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 md:w-6 md:h-6",
                                        activeIndex === index ? "text-gray-700" : "text-gray-500"
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
                                    <div className="px-6 pb-5 pt-0">
                                        <div className="flex gap-4">
                                            <div className="w-1 bg-gray-700 rounded-full flex-shrink-0 min-h-full" />
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
    );
}

