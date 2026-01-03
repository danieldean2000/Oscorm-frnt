'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ClientSection = () => {
    const logos = [
        "/images/home/Industry/sec-0.png",
        "/images/home/Industry/sec-1.png",
        "/images/home/Industry/sec-2.png",
        "/images/home/Industry/sec-3.png",
        "/images/home/Industry/sec-4.png",
        "/images/home/Industry/sec-5.png",
        "/images/home/Industry/sec-6.png",
        "/images/home/Industry/sec-7.png",
    ];

    // Duplicate logos to create seamless infinite scroll
    const marqueeLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-10 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 mb-4 md:mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)]">Industry Leaders</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                    Join 500+ forward-thinking companies scaling with Oscorm
                </p>
            </div>

            <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
                {/* Enhanced Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex items-center gap-4 md:gap-12 w-max px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {marqueeLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="group relative flex-shrink-0 w-28 h-20 md:w-40 md:h-28 flex items-center justify-center p-2 md:p-4 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <img
                                src={logo}
                                alt={`Industry Partner ${index + 1}`}
                                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientSection;