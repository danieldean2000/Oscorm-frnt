'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header() {
    const [activeCategory, setActiveCategory] = useState('admin-support');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

    // Define service categories and their roles
    const serviceCategories = {
        'admin-support': {
            title: 'Admin Support Services',
            roles: [
                { name: 'Virtual Assistants', href: '#' },
                { name: 'Customer Support', href: '#' },
                { name: 'Data Entry', href: '#' },
                { name: 'Executive Assistance', href: '#' },
            ]
        },
        'marketing': {
            title: 'Marketing Services',
            roles: [
                { name: 'Digital Marketing', href: '#' },
                { name: 'SEO Specialists', href: '#' },
                { name: 'Social Media Managers', href: '#' },
                { name: 'Content Marketers', href: '#' },
            ]
        },
        'creative-design': {
            title: 'Creative Design Services',
            roles: [
                { name: 'Graphic Designers', href: '#' },
                { name: 'UI/UX Designers', href: '#' },
                { name: 'Video Editors', href: '#' },
                { name: 'Animators', href: '#' },
            ]
        },
        'content-writing': {
            title: 'Content Writing Services',
            roles: [
                { name: 'Blog Writers', href: '#' },
                { name: 'Copywriters', href: '#' },
                { name: 'Technical Writers', href: '#' },
                { name: 'Content Strategists', href: '#' },
            ]
        },
        'talent-development': {
            title: 'Talent Development Services',
            roles: [
                { name: 'HR Specialists', href: '#' },
                { name: 'Training Coordinators', href: '#' },
                { name: 'Recruiters', href: '#' },
                { name: 'Learning Designers', href: '#' },
            ]
        },
        'ai-innovation': {
            title: 'AI & Innovation Services',
            roles: [
                { name: 'AI Specialists', href: '#' },
                { name: 'Machine Learning Engineers', href: '#' },
                { name: 'Data Scientists', href: '#' },
                { name: 'Innovation Consultants', href: '#' },
            ]
        },
        'development-tech': {
            title: 'Development & Tech Services',
            roles: [
                { name: 'Full Stack Developers', href: '#' },
                { name: 'Frontend Developers', href: '#' },
                { name: 'Backend Developers', href: '#' },
                { name: 'DevOps Engineers', href: '#' },
            ]
        },
        'legal': {
            title: 'Legal Services',
            roles: [
                { name: 'Legal Consultants', href: '#' },
                { name: 'Contract Specialists', href: '#' },
                { name: 'Compliance Officers', href: '#' },
                { name: 'Paralegals', href: '#' },
            ]
        },
        'engineering-architecture': {
            title: 'Engineering & Architecture Services',
            roles: [
                { name: 'Civil Engineers', href: '#' },
                { name: 'Architects', href: '#' },
                { name: 'Structural Engineers', href: '#' },
                { name: 'CAD Designers', href: '#' },
            ]
        },
        'finance-accounting': {
            title: 'Finance & Accounting Services',
            roles: [
                { name: 'Accountants', href: '#' },
                { name: 'Financial Analysts', href: '#' },
                { name: 'Bookkeepers', href: '#' },
                { name: 'Tax Consultants', href: '#' },
            ]
        },
        'ecommerce-operations': {
            title: 'Ecommerce Operations Services',
            roles: [
                { name: 'Store Managers', href: '#' },
                { name: 'Product Listers', href: '#' },
                { name: 'Inventory Specialists', href: '#' },
                { name: 'Customer Service Reps', href: '#' },
            ]
        },
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-b border-white/20 shadow-lg">
            <div className="w-full">
                <nav className="flex items-center justify-between h-20 px-8 lg:px-16">
                    {/* Mobile Menu Toggle */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[90%] sm:w-[400px] overflow-y-auto flex flex-col h-full">
                            <SheetHeader>
                                <SheetTitle className="text-left">
                                    <img
                                        src="/images/oscorm-logo.png"
                                        alt="Oscorm Logo"
                                        className="h-10 w-auto"
                                    />
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile Navigation */}
                            <div className="mt-8 flex flex-col space-y-4 flex-1">
                                <Link href="/why-oscorm" className="text-base font-medium hover:text-blue-600 transition-colors">
                                    Why Oscorm
                                </Link>
                                <Link href="/how-its-work" className="text-base font-medium hover:text-blue-600 transition-colors">
                                    How it Works
                                </Link>

                                {/* Mobile Services Dropdown */}
                                <div className="border-t pt-4">
                                    <button
                                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'services' ? null : 'services')}
                                        className="w-full flex items-center justify-between text-base font-medium hover:text-blue-600 transition-colors"
                                    >
                                        Services
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", (mobileActiveCategory === 'services' || (mobileActiveCategory && mobileActiveCategory !== 'hire-experts' && mobileActiveCategory !== 'resources' && mobileActiveCategory !== null)) && "rotate-180")} />
                                    </button>

                                    {(mobileActiveCategory === 'services' || (mobileActiveCategory && mobileActiveCategory !== 'hire-experts' && mobileActiveCategory !== 'resources' && mobileActiveCategory !== null)) && (
                                        <div className="mt-4 space-y-2 pl-4">
                                            {Object.entries(serviceCategories).map(([key, category]) => (
                                                <div key={key} className="border-l-2 border-transparent hover:border-teal-500 pl-3 transition-all">
                                                    <button
                                                        onClick={() => setMobileActiveCategory(mobileActiveCategory === key ? 'services' : key)}
                                                        className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600 py-2"
                                                    >
                                                        <span>{category.title}</span>
                                                        <ChevronDown className={cn("h-3 w-3 transition-transform", mobileActiveCategory === key && "rotate-180")} />
                                                    </button>
                                                    {mobileActiveCategory === key && (
                                                        <div className="mt-2 space-y-2 pl-3 bg-blue-50/50 rounded-lg p-3">
                                                            {category.roles.map((role, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={role.href}
                                                                    className="block text-sm text-gray-600 hover:text-blue-600 py-1 border-b border-gray-100 last:border-0"
                                                                >
                                                                    {role.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                {/* Mobile Hire Experts Dropdown */}
                                <div className="border-t pt-4">
                                    <button
                                        onClick={() => {
                                            if (mobileActiveCategory === 'hire-experts' || (mobileActiveCategory && mobileActiveCategory !== 'services' && mobileActiveCategory !== 'resources')) {
                                                setMobileActiveCategory(null);
                                            } else {
                                                setMobileActiveCategory('hire-experts');
                                            }
                                        }}
                                        className="w-full flex items-center justify-between text-base font-medium hover:text-blue-600 transition-colors"
                                    >
                                        Hire Experts
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", (mobileActiveCategory === 'hire-experts' || (mobileActiveCategory && mobileActiveCategory !== 'services' && mobileActiveCategory !== 'resources')) && "rotate-180")} />
                                    </button>

                                    {(mobileActiveCategory === 'hire-experts' || (mobileActiveCategory && mobileActiveCategory !== 'services' && mobileActiveCategory !== 'resources' && mobileActiveCategory !== null)) && (
                                        <div className="mt-4 space-y-2 pl-4">
                                            {Object.entries(serviceCategories).map(([key, category]) => (
                                                <div key={key} className="border-l-2 border-transparent hover:border-teal-500 pl-3 transition-all">
                                                    <button
                                                        onClick={() => setMobileActiveCategory(mobileActiveCategory === key ? 'hire-experts' : key)}
                                                        className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600 py-2"
                                                    >
                                                        <span>{category.title}</span>
                                                        <ChevronDown className={cn("h-3 w-3 transition-transform", mobileActiveCategory === key && "rotate-180")} />
                                                    </button>
                                                    {mobileActiveCategory === key && (
                                                        <div className="mt-2 space-y-2 pl-3 bg-blue-50/50 rounded-lg p-3">
                                                            {category.roles.map((role, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={role.href}
                                                                    className="block text-sm text-gray-600 hover:text-blue-600 py-1 border-b border-gray-100 last:border-0"
                                                                >
                                                                    {role.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/pricing" className="text-base font-medium hover:text-blue-600 transition-colors">
                                    Pricing
                                </Link>

                                {/* Mobile Resources Dropdown */}
                                <div className="border-t pt-4">
                                    <button
                                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'resources' ? null : 'resources')}
                                        className="w-full flex items-center justify-between text-base font-medium hover:text-blue-600 transition-colors"
                                    >
                                        Resources
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", mobileActiveCategory === 'resources' && "rotate-180")} />
                                    </button>

                                    {mobileActiveCategory === 'resources' && (
                                        <div className="mt-4 space-y-3 pl-4">
                                            <Link href="/blog" className="block group">
                                                <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-base">Blogs</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">Explore insights, ideas, and industry trends</p>
                                                </div>
                                            </Link>
                                            <Link href="/about-us" className="block group">
                                                <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-base">About</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">Learn who we are and what we stand for</p>
                                                </div>
                                            </Link>
                                            <Link href="/case-studies" className="block group">
                                                <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-base">Case Studies</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">See real results and proven client success</p>
                                                </div>
                                            </Link>
                                            <Link href="/careers" className="block group">
                                                <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-base">Careers</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">Build your future with our growing team</p>
                                                </div>
                                            </Link>
                                            <Link href="/faq" className="block group">
                                                <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-base">FAQs</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed">Find quick answers to common questions</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Quick Actions */}
                                <div className="border-t pt-4 space-y-2">
                                    <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium">
                                        Fix Meeting <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium">
                                        Book Strategy Call <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium">
                                        Start 48-hour Team <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Request Proposal Button */}
                            <div className="pt-6 pb-2 mt-auto border-t">
                                <Button className="w-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] hover:from-blue-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all">
                                    Request Proposal
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Logo - Centered on mobile, Left on desktop */}
                    <Link href="/" className="flex items-center lg:mr-auto">
                        <img
                            src="/images/oscorm-logo.png"
                            alt="Oscorm Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1 mx-auto">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/why-oscorm" className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
                                            Why Oscorm
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/how-its-work" className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
                                            How it Works
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/hire-us" className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
                                            Hire Us
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem> */}

                                {/* Services Megamenu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium">
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-full px-8 lg:px-16 py-8">
                                            <div className="grid grid-cols-3 gap-12">
                                                {/* Column 1: Service Categories */}
                                                <div className="border-r pr-6">
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-blue-600">
                                                        Services
                                                    </h4>
                                                    <div className="space-y-1 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                                        {Object.entries(serviceCategories).map(([key, category]) => (
                                                            <button
                                                                key={key}
                                                                onMouseEnter={() => setActiveCategory(key)}
                                                                className={cn(
                                                                    "w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2",
                                                                    activeCategory === key
                                                                        ? "bg-blue-50 border-teal-500 text-blue-600 font-medium"
                                                                        : "border-transparent hover:bg-blue-50/50 hover:border-teal-300"
                                                                )}
                                                            >
                                                                {category.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Column 2: Dynamic Roles */}
                                                <div className="border-r pr-6">
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-teal-500">
                                                        {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {serviceCategories[activeCategory as keyof typeof serviceCategories].roles.map((role, idx) => (
                                                            <Link
                                                                key={idx}
                                                                href={role.href}
                                                                className="block py-2 text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all border-b border-gray-100 last:border-0"
                                                            >
                                                                {role.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Column 3: Quick Actions */}
                                                <div>
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-blue-600">
                                                        Quick Actions
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Fix Meeting <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Book Strategy Call <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Start 48-hour Team <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Hire Experts Megamenu (Duplicate of Services) */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium">
                                        Hire Experts
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-full px-8 lg:px-16 py-8">
                                            <div className="grid grid-cols-3 gap-12">
                                                {/* Column 1: Service Categories */}
                                                <div className="border-r pr-6">
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-blue-600">
                                                        Expertise
                                                    </h4>
                                                    <div className="space-y-1 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                                        {Object.entries(serviceCategories).map(([key, category]) => (
                                                            <button
                                                                key={key}
                                                                onMouseEnter={() => setActiveCategory(key)}
                                                                className={cn(
                                                                    "w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2",
                                                                    activeCategory === key
                                                                        ? "bg-blue-50 border-teal-500 text-blue-600 font-medium"
                                                                        : "border-transparent hover:bg-blue-50/50 hover:border-teal-300"
                                                                )}
                                                            >
                                                                {category.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Column 2: Dynamic Roles */}
                                                <div className="border-r pr-6">
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-teal-500">
                                                        {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {serviceCategories[activeCategory as keyof typeof serviceCategories].roles.map((role, idx) => (
                                                            <Link
                                                                key={idx}
                                                                href={role.href}
                                                                className="block py-2 text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all border-b border-gray-100 last:border-0"
                                                            >
                                                                {role.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Column 3: Quick Actions */}
                                                <div>
                                                    <h4 className="text-base font-semibold mb-4 pb-2 border-b-2 border-blue-600">
                                                        Start Hiring
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Fix Meeting <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Book Strategy Call <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                        <Link href="#" className="flex items-center justify-between text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform">
                                                            Start 48-hour Team <ArrowRight className="h-4 w-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/pricing" className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
                                            Pricing
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* Resources Megamenu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-sm font-medium">
                                        Resources
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-screen p-8 bg-white rounded-xl border border-gray-200/60 shadow-2xl">
                                            <div className="max-w-7xl mx-auto">
                                                <div className="grid grid-cols-3 gap-8">
                                                    {/* Column 1 */}
                                                    <div className="space-y-6">
                                                        <Link href="/blog" className="block group">
                                                            <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">Blogs</h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">Explore insights, ideas, and industry trends</p>
                                                            </div>
                                                        </Link>
                                                        <Link href="/about-us" className="block group">
                                                            <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">About</h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">Learn who we are and what we stand for</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    {/* Column 2 */}
                                                    <div className="space-y-6">
                                                        <Link href="/case-studies" className="block group">
                                                            <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">Case Studies</h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">See real results and proven client success</p>
                                                            </div>
                                                        </Link>
                                                        <Link href="/careers" className="block group">
                                                            <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">Careers</h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">Build your future with our growing team</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    {/* Column 3 */}
                                                    <div className="space-y-6">
                                                        <Link href="/faq" className="block group">
                                                            <div className="p-4 rounded-lg bg-gray-50/50 group-hover:bg-blue-50/50 transition-all duration-200">
                                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">FAQs</h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">Find quick answers to common questions</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Request Proposal Button - Hidden on Mobile */}
                    <Button className="hidden lg:flex bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)] hover:from-blue-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all">
                        Request Proposal
                    </Button>
                </nav>
            </div>
        </header>
    );
}