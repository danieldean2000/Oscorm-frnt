'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface CaseStudyProps {
  className?: string;
}

interface CaseStudyItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  results: {
    metric: string;
    value: string;
  }[];
}

export default function CaseStudies({ className = "" }: CaseStudyProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const caseStudies: CaseStudyItem[] = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      category: "e-commerce",
      description: "Complete digital transformation of a retail giant's e-commerce platform, resulting in 300% increase in online sales and improved customer experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      results: [
        { metric: "Sales Increase", value: "300%" },
        { metric: "Page Load Time", value: "-60%" },
        { metric: "Conversion Rate", value: "+250%" }
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "healthcare",
      description: "Development of a comprehensive healthcare management system that streamlined patient records and improved operational efficiency by 85%.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      results: [
        { metric: "Efficiency", value: "+85%" },
        { metric: "Error Reduction", value: "-70%" },
        { metric: "Patient Satisfaction", value: "+90%" }
      ]
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      category: "fintech",
      description: "Revolutionary mobile banking application with AI-powered financial insights, serving over 1 million users with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Machine Learning", "Blockchain"],
      results: [
        { metric: "Active Users", value: "1M+" },
        { metric: "Transaction Volume", value: "$500M+" },
        { metric: "User Retention", value: "95%" }
      ]
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      category: "logistics",
      description: "AI-driven supply chain optimization platform that reduced delivery times by 40% and operational costs by 35% for a global logistics company.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Azure", "IoT"],
      results: [
        { metric: "Delivery Time", value: "-40%" },
        { metric: "Cost Reduction", value: "-35%" },
        { metric: "Accuracy", value: "+95%" }
      ]
    },
    {
      id: 5,
      title: "Educational Platform",
      category: "education",
      description: "Scalable online learning platform that accommodated 500,000+ students during peak usage with personalized learning paths.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Node.js", "Redis", "Kubernetes"],
      results: [
        { metric: "Students Served", value: "500K+" },
        { metric: "Engagement Rate", value: "+80%" },
        { metric: "Completion Rate", value: "+75%" }
      ]
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "realestate",
      description: "Innovative real estate marketplace with virtual tours and AI-powered property recommendations, increasing lead conversion by 200%.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Three.js"],
      results: [
        { metric: "Lead Conversion", value: "+200%" },
        { metric: "User Engagement", value: "+150%" },
        { metric: "Property Views", value: "+300%" }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'e-commerce', name: 'E-Commerce' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'education', name: 'Education' },
    { id: 'realestate', name: 'Real Estate' }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-center mb-[80px] md:mb-[60px]" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl px-5">
          <h1 className="text-[3.5rem] md:text-[2.8rem] font-semibold mb-6">Case Studies</h1>
          <p className="text-xl md:text-lg opacity-90 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-5 md:px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#333] to-[#555] text-white shadow-lg'
                  : 'bg-gray-100 text-[#666] hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCaseStudies.map((study, index) => (
            <div key={study.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#333] uppercase tracking-[1px] bg-gradient-to-r from-[#333] to-[#555] text-white px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs text-[#666]">
                    {study.technologies.length} Technologies
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#000] group-hover:text-[#333] transition-colors mb-3">
                  {study.title}
                </h3>
                
                <p className="text-[#666] leading-relaxed line-clamp-3 mb-4">
                  {study.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-[#666] px-2 py-1 rounded-md border border-gray-300">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 2 && (
                      <span className="text-xs bg-gray-100 text-[#666] px-2 py-1 rounded-md">
                        +{study.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <button className="text-xs font-medium text-[#333] hover:text-[#555] transition-colors flex items-center gap-1">
                    View Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-[#333] via-[#444] to-[#555] text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Impact</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              Numbers that speak for themselves - delivering exceptional results across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-110">150+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-110">50+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-110">10+</div>
              <div className="text-sm opacity-80">Industries Served</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 transform transition-transform duration-300 group-hover:scale-110">99.9%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
