import React from 'react';
import {
    Shield,
    Zap,
    BarChart3,
    Star,
    CalendarCheck,
    PlayCircle,
    Clock,
    ArrowUp,
    Brain
} from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 pt-32 pb-16 overflow-hidden min-h-screen flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
                {/* Decorative blobs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Content */}
                    <div>
                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                                <span className="bg-gradient-to-r from-teal-400 to-green-400 text-gray-900 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                    AI-Powered
                                </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                                <Shield className="w-4 h-4 text-teal-400" />
                                <span className="text-white text-sm font-semibold">Trusted by 500+ Companies</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-6">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                                Build Your Remote Team
                            </h1>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                                With AI Oversight
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                            Deploy pre-vetted engineers, AI specialists, and digital marketing teams
                            with real-time performance dashboards, automated quality assurance,
                            and complete project visibility.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-green-400 rounded-lg flex items-center justify-center text-white mb-3 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">48<span className="text-base text-teal-400 ml-1">hrs</span></h3>
                                <p className="text-white/80 text-sm font-medium">Average Setup</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-green-400 rounded-lg flex items-center justify-center text-white mb-3 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">40<span className="text-base text-teal-400 ml-1">%</span></h3>
                                <p className="text-white/80 text-sm font-medium">Cost Savings</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-green-400 rounded-lg flex items-center justify-center text-white mb-3 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                    <Star className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">98<span className="text-base text-teal-400 ml-1">%</span></h3>
                                <p className="text-white/80 text-sm font-medium">Satisfaction</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="#" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <CalendarCheck className="w-5 h-5" />
                                Book Strategy Call
                            </a>
                            <a href="#" className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                                <PlayCircle className="w-5 h-5" />
                                Watch Demo
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 text-sm font-medium">4.9/5 from 200+ companies</p>
                                </div>
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <Shield className="w-4 h-4" />
                                    Enterprise-grade security
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Dashboard */}
                    <div className="relative">
                        {/* Decorative glow behind dashboard */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-90 -z-10"></div>

                        <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[500px] flex flex-col">
                            {/* Dashboard Header */}
                            <div className="px-5 py-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-white/70 text-sm font-mono ml-2">Oscorm Performance Dashboard</div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-2 gap-4 p-5 flex-1 overflow-y-auto">
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Productivity</h4>
                                    <div className="text-3xl font-bold text-white mb-2">94%</div>
                                    <div className="flex items-center gap-1 text-xs text-teal-400 mb-3">
                                        <ArrowUp className="w-3 h-3" />
                                        <span>+2.4% this week</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" style={{ width: '94%' }}></div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Completion</h4>
                                    <div className="text-3xl font-bold text-white mb-2">87%</div>
                                    <div className="flex items-center gap-1 text-xs text-teal-400 mb-3">
                                        <ArrowUp className="w-3 h-3" />
                                        <span>+1.8% this week</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" style={{ width: '87%' }}></div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Quality</h4>
                                    <div className="text-3xl font-bold text-white mb-2">96%</div>
                                    <div className="flex items-center gap-1 text-xs text-teal-400 mb-3">
                                        <ArrowUp className="w-3 h-3" />
                                        <span>+0.9% this week</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" style={{ width: '96%' }}></div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">NPS</h4>
                                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                                    <div className="flex items-center gap-1 text-xs text-teal-400 mb-3">
                                        <ArrowUp className="w-3 h-3" />
                                        <span>+1.2% this week</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" style={{ width: '98%' }}></div>
                                    </div>
                                </div>

                                {/* AI Insights */}
                                <div className="col-span-2 bg-gradient-to-br from-blue-900/40 to-teal-900/40 rounded-xl p-4 border border-teal-500/20 flex items-start gap-4">
                                    <div className="p-2 bg-teal-500/10 rounded-lg">
                                        <Brain className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h5 className="text-teal-400 text-xs font-bold uppercase">AI Insight</h5>
                                            <span className="flex items-center gap-1 text-[10px] text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20 animate-pulse">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                                                LIVE
                                            </span>
                                        </div>
                                        <p className="text-white/80 text-sm leading-snug">
                                            Workflow optimization detected. Implementing specific routing could increase efficiency by ~15%.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Status Bar */}
                            {/* <div className="px-5 py-3 bg-white/5 border-t border-white/10 flex justify-between items-center mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                                    </div>
                                    <span className="text-white/60 text-xs font-medium">System Online</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/50 text-xs">
                                    <Clock className="w-3 h-3" />
                                    <span className="font-mono">Updated: Just now</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;