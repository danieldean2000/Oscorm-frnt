import React from "react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

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
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                />
                <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={cn(
                            "w-4 h-4",
                            index < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-200 fill-gray-200"
                        )}
                    />
                ))}
            </div>

            <p className="text-gray-600 leading-relaxed italic relative">
                <span className="text-2xl text-gray-300 absolute -top-2 -left-2 font-serif">"</span>
                {testimonial.quote}
                <span className="text-2xl text-gray-300 absolute -bottom-4 font-serif">"</span>
            </p>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section className="py-20 px-6 bg-gray-50/50">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
                        Trusted by Startups & Enterprises
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto">
                        See what our clients say about working with Oscorm
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
