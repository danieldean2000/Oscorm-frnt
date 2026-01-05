'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Youtube, Instagram, ChevronUp } from 'lucide-react';
import Newsletter from './news-latter';
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <Newsletter />
        <footer className="bg-[#0B1221] text-white relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    AI & Innovation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Engineering & Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Marketing & Sales
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Design & Creative
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Content & Writing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Admin & Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors">
                                    Cookies Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors">
                                    Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Service Areas</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    North America
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Europe
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Asia Pacific
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Middle East
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Africa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media & Back to Top Section */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/Oscorm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/oscormdigital/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/Oscorm_Digital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@oscormdigital2324"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/oscormdigital/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Top</span>
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6">
                    <p className="text-center text-gray-400 text-sm">
                        © 2009 - 2025 Oscorm™ Digital Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
}
