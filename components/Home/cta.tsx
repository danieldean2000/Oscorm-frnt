"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Rocket, CalendarCheck, PlayCircle, FileText, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1b35] to-[#0a1628]" id="cta">
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Glassy Card */}
                    <div className="relative bg-[#1e293b]/70 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-14 text-center shadow-2xl overflow-hidden">

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                                Scale Your Team with Confidence
                            </h2>
                            <p className="text-base md:text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed">
                                Deploy expert talent with AI-powered management. Get enterprise-grade results without the enterprise complexity.
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                <div className="flex items-center gap-2 bg-[#2d3748]/60 border border-white/10 px-5 py-2.5 rounded-full text-white/90 text-sm font-medium">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>Enterprise Security & Compliance</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#2d3748]/60 border border-white/10 px-5 py-2.5 rounded-full text-white/90 text-sm font-medium">
                                    <Rocket className="w-4 h-4 text-blue-400" />
                                    <span>48-Hour Expert Deployment</span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap justify-center gap-4 mb-10 w-full px-2">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-[200px] justify-center"
                                >
                                    <CalendarCheck className="w-5 h-5" />
                                    <span>Book Strategy Call</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-2 bg-[#2d3748]/80 hover:bg-[#374151] text-white border border-white/10 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-1 min-w-[200px] justify-center"
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    <span>Watch Platform Demo</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0B1221] px-6 py-3.5 rounded-lg font-bold text-sm transition-all hover:-translate-y-1 min-w-[200px] justify-center"
                                >
                                    <FileText className="w-5 h-5" />
                                    <span>View Pricing Plans</span>
                                </Link>
                            </div>

                            {/* Footer Note */}
                            <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                <Info className="w-4 h-4 flex-shrink-0" />
                                <span>All plans include dedicated project manager, AI oversight dashboard, and 30-day satisfaction guarantee.</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}