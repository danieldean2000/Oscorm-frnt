"use client";

import React from "react";
import {
    Database,
    Brain,
    TrendingUp,
    ArrowRight,
    Gauge,
    Clock,
    CheckCircle,
    Shield,
    List,
    BarChart3
} from "lucide-react";

export default function AiTransparency() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#0D1B35] to-[#0A1628] text-white relative overflow-hidden" id="ai">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Visual Dashboard */}
                    <div className="relative">
                        {/* Dashboard Card */}
                        <div className="relative bg-[#0F1A2E]/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl">
                            <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8 text-center">
                                AI-Powered Workflow Optimization
                            </div>

                            {/* Process Flow */}
                            <div className="flex items-center justify-between mb-8 relative px-2">
                                {/* Connecting Line */}
                                <div className="absolute top-1/2 left-12 right-12 h-[1px] bg-slate-600/30 -z-10" />

                                {/* Step 1 - Data Collection */}
                                <div className="flex flex-col items-center gap-2.5">
                                    <div className="w-14 h-14 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shadow-lg">
                                        <Database className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-[9px] md:text-[10px] text-slate-400 text-center font-medium leading-tight max-w-[85px]">
                                        Data Collection<br />& Analysis
                                    </div>
                                </div>

                                <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />

                                {/* Step 2 - Intelligent Processing */}
                                <div className="flex flex-col items-center gap-2.5">
                                    <div className="w-14 h-14 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shadow-lg">
                                        <Brain className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-[9px] md:text-[10px] text-white text-center font-medium leading-tight max-w-[85px]">
                                        Intelligent<br />Processing
                                    </div>
                                </div>

                                <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />

                                {/* Step 3 - Actionable Insights */}
                                <div className="flex flex-col items-center gap-2.5">
                                    <div className="w-14 h-14 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shadow-lg">
                                        <TrendingUp className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div className="text-[9px] md:text-[10px] text-slate-400 text-center font-medium leading-tight max-w-[85px]">
                                        Actionable<br />Insights
                                    </div>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {/* Productivity Gain */}
                                <div className="bg-[#1A2942]/60 border border-slate-600/30 rounded-xl p-4 hover:border-slate-500/50 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Gauge className="w-3.5 h-3.5 text-teal-400" />
                                        <h4 className="text-[10px] text-slate-300 font-semibold">Productivity Gain</h4>
                                    </div>
                                    <div className="text-2xl font-bold text-teal-400 mb-0.5">42%</div>
                                    <div className="text-[9px] text-slate-500 font-medium">Average improvement</div>
                                </div>

                                {/* Time Saved */}
                                <div className="bg-[#1A2942]/60 border border-slate-600/30 rounded-xl p-4 hover:border-slate-500/50 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                        <h4 className="text-[10px] text-slate-300 font-semibold">Time Saved</h4>
                                    </div>
                                    <div className="text-2xl font-bold text-cyan-400 mb-0.5">65%</div>
                                    <div className="text-[9px] text-slate-500 font-medium">Manual task automation</div>
                                </div>

                                {/* Accuracy Rate */}
                                <div className="bg-[#1A2942]/60 border border-slate-600/30 rounded-xl p-4 hover:border-slate-500/50 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
                                        <h4 className="text-[10px] text-slate-300 font-semibold">Accuracy Rate</h4>
                                    </div>
                                    <div className="text-2xl font-bold text-teal-400 mb-0.5">98.7%</div>
                                    <div className="text-[9px] text-slate-500 font-medium">Quality assurance</div>
                                </div>

                                {/* ROI Increase */}
                                <div className="bg-[#1A2942]/60 border border-slate-600/30 rounded-xl p-4 hover:border-slate-500/50 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                                        <h4 className="text-[10px] text-slate-300 font-semibold">ROI Increase</h4>
                                    </div>
                                    <div className="text-2xl font-bold text-cyan-400 mb-0.5">35%</div>
                                    <div className="text-[9px] text-slate-500 font-medium">Average client return</div>
                                </div>
                            </div>

                            {/* System Status */}
                            <div className="bg-[#131D32] rounded-lg p-3 flex items-center justify-between border border-slate-700/50">
                                <div className="flex items-center gap-2.5">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                                        <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-75" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-semibold text-white mb-0.5">System Active</div>
                                        <div className="text-[9px] text-slate-500">Real-time monitoring enabled</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-[9px] text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md border border-slate-700/50">
                                    <Shield className="w-3 h-3" />
                                    <span className="hidden sm:inline">Enterprise Security</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                            The AI-Powered <br />
                            <span className="text-cyan-400">
                                Transparency Engine
                            </span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed">
                            Real-time visibility and intelligent automation for remote team management.
                        </p>

                        <div className="space-y-6">
                            {/* Live Performance Dashboards */}
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 transition-all">
                                    <Gauge className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold mb-1.5 text-white group-hover:text-teal-400 transition-colors">
                                        Live Performance Dashboards
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                                        Real-time insights into team productivity and project progress with automated reporting.
                                    </p>
                                </div>
                            </div>

                            {/* Automated Time Tracking */}
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-all">
                                    <Clock className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold mb-1.5 text-white group-hover:text-cyan-400 transition-colors">
                                        Automated Time Tracking
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                                        Accurate work logs and activity monitoring with AI verification and productivity analysis.
                                    </p>
                                </div>
                            </div>

                            {/* Intelligent Task Management */}
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-all">
                                    <List className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold mb-1.5 text-white group-hover:text-blue-400 transition-colors">
                                        Intelligent Task Management
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                                        AI-powered prioritization and automated workflow optimization for maximum efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Predictive Analytics */}
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-[#1A2942] border border-slate-600/50 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 transition-all">
                                    <BarChart3 className="w-5 h-5 text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-bold mb-1.5 text-white group-hover:text-teal-400 transition-colors">
                                        Predictive Analytics
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                                        Data-driven insights and performance forecasting with proactive issue detection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
