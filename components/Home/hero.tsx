'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Sparkles, TrendingUp, Shield, CheckCircle2 } from "lucide-react";

// Placeholder for the hero image since generation failed. 
// User can replace this with their actual dashboard screenshot.
const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top Right Gradient Orb */}
                <motion.div
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[var(--brand-blue)]/20 via-indigo-400/10 to-transparent rounded-full blur-3xl opacity-30"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Bottom Left Gradient Orb */}
                <motion.div
                    className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--brand-teal)]/20 via-blue-400/10 to-transparent rounded-full blur-3xl opacity-40"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-[var(--brand-blue)] text-sm font-medium shadow-sm"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-4 h-4 fill-current" />
                            <span>#1 Global Team Platform</span>
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                                <span className="block">
                                    Build Your Dream
                                </span>
                                <span className="block bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] bg-clip-text text-transparent">
                                    Team Faster
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
                                Oscorm connects you with top 1% global engineering talent. AI-matched, pre-vetted, and ready to deploy in 48 hours.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="flex flex-col gap-3">
                            {[
                                { icon: CheckCircle2, text: "Pre-vetted Senior Engineers" },
                                { icon: TrendingUp, text: "AI-Powered Performance Tracking" },
                                { icon: Shield, text: "Enterprise-Grade Compliance" }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] flex items-center justify-center shadow-md">
                                        <feature.icon className="w-3.5 h-3.5 text-white stroke-[3px]" />
                                    </div>
                                    <span className="font-semibold text-base">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link href="#">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] hover:from-blue-700 hover:to-teal-600 text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                >
                                    Start Hiring Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 text-lg rounded-full border-2 border-slate-200 hover:border-blue-200 bg-white/50 backdrop-blur-sm text-slate-700 hover:text-[var(--brand-blue)] transition-all duration-300 w-full sm:w-auto"
                            >
                                <Play className="mr-2 w-5 h-5 fill-current opacity-80" />
                                Watch Demo
                            </Button>
                        </motion.div>

                        {/* Stats Text */}
                        <motion.div
                            className="flex items-center gap-8 pt-4 border-t border-slate-200/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            {[
                                { value: "500+", label: "Teams Scaled" },
                                { value: "48h", label: "Avg. Match Time" },
                                { value: "98%", label: "Retention Rate" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Hero Image Area */}
                    <motion.div
                        className="relative lg:block hidden h-[600px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-full h-full">
                            {/* Main Image Container (CSS Placeholder) */}
                            <motion.div
                                className="relative w-full h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src="/images/hero.jpg"
                                    alt="Oscorm Dashboard"
                                    className="w-full h-full object-cover"
                                />

                                {/* Glass overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/10 via-transparent to-[var(--brand-teal)]/10 pointer-events-none" />
                            </motion.div>

                            {/* Floating Success Badge */}
                            <motion.div
                                className="absolute top-12 -right-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 border border-white/50"
                                animate={{
                                    y: [0, 20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">40%</p>
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Cost Savings</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Features Badge */}
                            <motion.div
                                className="absolute bottom-20 -left-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 border border-white/50 max-w-[200px]"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-[var(--brand-blue)]/10">
                                        <Shield className="w-5 h-5 text-[var(--brand-blue)]" />
                                    </div>
                                    <div className="font-bold text-slate-900">Enterprise Ready</div>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                                    <div className="bg-[var(--brand-blue)] h-full w-[90%] rounded-full" />
                                </div>
                                <div className="flex justify-between text-[10px] text-slate-500 font-medium ml-1">
                                    <span>Compliance</span>
                                    <span>100%</span>
                                </div>
                            </motion.div>

                            {/* Floating Rating Badge */}
                            <motion.div
                                className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-3 border border-white/50 flex items-center gap-2"
                                animate={{
                                    x: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] overflow-hidden`}>
                                            <img src={`/images/home/Industry/sec-${i}.png`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <div className="pl-2">
                                    <div className="flex text-yellow-500 gap-0.5">
                                        <Star className="w-3 h-3 fill-current" />
                                        <Star className="w-3 h-3 fill-current" />
                                        <Star className="w-3 h-3 fill-current" />
                                        <Star className="w-3 h-3 fill-current" />
                                        <Star className="w-3 h-3 fill-current" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-600 mt-0.5">FROM 500+ CLIENTS</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
