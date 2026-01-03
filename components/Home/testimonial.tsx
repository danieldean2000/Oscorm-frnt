import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Davis",
        role: "CEO, TechVision Inc.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        quote:
            "Oscorm's AI-powered transparency engine gave us complete visibility into our remote team's productivity. Project completion rates improved by 65% in the first quarter.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Miller",
        role: "Product Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        quote:
            "The 48-hour deployment wasn't just a promise—it was reality. Our AI development team was operational within two days, delivering quality code from day one.",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CTO, ScaleFast",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        quote:
            "Cost savings of 40% without compromising quality? Oscorm made it possible. Their managed talent approach eliminated recruitment headaches entirely.",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Watson",
        role: "Head of Engineering, CloudBase",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        quote:
            "I was skeptical about AI-sourced talent, but Oscorm proved me wrong. The developers we hired are top-tier and seamlessly integrated into our workflow.",
        rating: 5,
    },
    {
        id: 5,
        name: "David Kim",
        role: "Founder, StartUp X",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        quote:
            "Oscorm handles all the compliance and payroll headaches, letting me focus on building my product. It's a game-changer for international hiring.",
        rating: 4,
    },
    {
        id: 6,
        name: "Jessica Lee",
        role: "VP of Operations, NextGen",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        quote:
            "The platform is intuitive and the support is fantastic. We scale our team up and down with ease thanks to Oscorm's flexible model.",
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-gray-100 w-[200px] md:w-[350px] flex-shrink-0 flex flex-col h-full mx-2 md:mx-4 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                <img
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                />
                <div>
                    <h4 className="font-semibold text-gray-900 text-[10px] md:text-base">{testimonial.name}</h4>
                    <p className="text-[9px] md:text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={cn(
                            "w-2.5 h-2.5 md:w-4 md:h-4",
                            index < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-200 fill-gray-200"
                        )}
                    />
                ))}
            </div>

            <p className="text-gray-600 leading-relaxed italic relative text-[10px] md:text-base">
                <span className="text-base md:text-2xl text-gray-300 absolute -top-2 -left-1 md:-left-2 font-serif">"</span>
                {testimonial.quote}
                <span className="text-base md:text-2xl text-gray-300 absolute -bottom-3 md:-bottom-4 font-serif">"</span>
            </p>
        </div>
    );
};

export default function TestimonialSection() {
    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto max-w-7xl mb-12 px-6">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4 px-2">
                        Trusted by Startups & Enterprises
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl text-center mx-auto px-4">
                        See what our clients say about working with Oscorm
                    </p>
                </div>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}