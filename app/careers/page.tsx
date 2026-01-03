'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface CareersProps {
  className?: string;
}

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export default function Careers({ className = "" }: CareersProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [visibleJobsCount, setVisibleJobsCount] = useState<{ [key: string]: number }>({
    all: 3,
    engineering: 3,
    design: 3,
    product: 3,
    marketing: 3,
    sales: 3,
    hr: 3
  });

  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "engineering",
      location: "Noida, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "We're looking for an experienced Frontend Developer to join our dynamic team and help build amazing user experiences.",
      requirements: [
        "3+ years of experience with React/Next.js",
        "Strong proficiency in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS)",
        "Knowledge of responsive design principles",
        "Experience with state management (Redux, Zustand)",
        "Understanding of web performance optimization"
      ],
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with design and backend teams",
        "Write clean, maintainable, and well-documented code",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and team meetings",
        "Stay up-to-date with emerging technologies"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible work hours and remote options",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Annual team retreats and events"
      ]
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "engineering",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our backend team to build scalable APIs and services that power our applications.",
      requirements: [
        "2+ years of experience with Node.js or Python",
        "Strong knowledge of databases (PostgreSQL, MongoDB)",
        "Experience with RESTful APIs and microservices",
        "Understanding of cloud platforms (AWS, Azure)",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Experience with CI/CD pipelines"
      ],
      responsibilities: [
        "Design and develop scalable backend services",
        "Write efficient, testable, and maintainable code",
        "Collaborate with frontend teams to integrate APIs",
        "Optimize database queries and application performance",
        "Implement security best practices",
        "Mentor junior developers"
      ],
      benefits: [
        "Stock options and performance bonuses",
        "Comprehensive health coverage",
        "Flexible work arrangements",
        "Learning and development opportunities",
        "Modern office with amenities"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "design",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "We're seeking a creative UI/UX Designer to create beautiful and intuitive user interfaces.",
      requirements: [
        "2+ years of experience in UI/UX design",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating design skills",
        "Understanding of user-centered design principles",
        "Experience with responsive design",
        "Knowledge of design systems and component libraries"
      ],
      responsibilities: [
        "Create wireframes, mockups, and prototypes",
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Maintain and improve our design system",
        "Stay current with design trends and best practices"
      ],
      benefits: [
        "Creative freedom and autonomy",
        "Latest design tools and resources",
        "Conference and workshop opportunities",
        "Flexible work environment",
        "Collaborative and inclusive culture"
      ]
    },
    {
      id: 4,
      title: "Product Manager",
      department: "product",
      location: "Noida, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Lead product strategy and development for our innovative software solutions.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and leadership skills",
        "Understanding of software development lifecycle",
        "Data-driven decision making approach"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Create and maintain product roadmaps",
        "Work closely with engineering and design teams",
        "Conduct market research and competitive analysis",
        "Gather and prioritize user requirements",
        "Monitor product performance and user feedback"
      ],
      benefits: [
        "Leadership role with growth potential",
        "Equity participation in company success",
        "Executive-level benefits package",
        "Strategic decision-making influence",
        "Professional development programs"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Noida, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Help us build and maintain robust infrastructure for our growing platform.",
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of AWS or Azure cloud platforms",
        "Experience with containerization and orchestration",
        "Proficiency in CI/CD tools and practices",
        "Understanding of infrastructure as code (Terraform)",
        "Experience with monitoring and logging tools"
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and deployments",
        "Monitor system performance and reliability",
        "Implement security best practices",
        "Automate operational processes",
        "Troubleshoot and resolve infrastructure issues"
      ],
      benefits: [
        "Cutting-edge technology stack",
        "Certification and training support",
        "On-call compensation and flexibility",
        "Collaborative engineering culture",
        "Innovation time and hackathons"
      ]
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "marketing",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Drive our marketing initiatives and help grow our brand presence in the market.",
      requirements: [
        "3+ years of marketing experience",
        "Strong understanding of digital marketing strategies",
        "Experience with content marketing and SEO",
        "Analytical skills and data-driven approach",
        "Excellent communication and writing skills",
        "Experience with marketing automation tools"
      ],
      responsibilities: [
        "Develop and execute marketing strategies",
        "Manage digital marketing campaigns",
        "Create compelling content and messaging",
        "Analyze marketing metrics and ROI",
        "Collaborate with sales and product teams",
        "Build brand awareness and lead generation"
      ],
      benefits: [
        "Creative and strategic role",
        "Marketing budget and resources",
        "Performance-based bonuses",
        "Industry conference attendance",
        "Professional development opportunities"
      ]
    },
    {
      id: 7,
      title: "SEO Specialist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "We're looking for an SEO Specialist to improve our search engine rankings and drive organic traffic growth.",
      requirements: [
        "2+ years of SEO experience with proven results",
        "Strong knowledge of Google Analytics and Search Console",
        "Experience with SEO tools (Ahrefs, SEMrush, Moz)",
        "Understanding of on-page and off-page SEO techniques",
        "Knowledge of technical SEO best practices",
        "Experience with content optimization and keyword research"
      ],
      responsibilities: [
        "Develop and implement SEO strategies",
        "Conduct keyword research and competitor analysis",
        "Optimize website content for search engines",
        "Monitor and analyze SEO performance metrics",
        "Build high-quality backlinks and partnerships",
        "Stay updated with search engine algorithm changes"
      ],
      benefits: [
        "Remote work flexibility",
        "SEO tool subscriptions and training",
        "Performance-based bonuses",
        "Conference and workshop opportunities",
        "Professional development budget"
      ]
    },
    {
      id: 8,
      title: "Content Writer",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Join our marketing team to create compelling content that engages our audience and drives conversions.",
      requirements: [
        "1+ years of content writing experience",
        "Excellent writing and editing skills",
        "Experience with SEO and content marketing",
        "Ability to write for different audiences and platforms",
        "Strong research and analytical skills",
        "Experience with content management systems"
      ],
      responsibilities: [
        "Write blog posts, articles, and website content",
        "Create social media content and email newsletters",
        "Conduct research and interviews for content creation",
        "Optimize content for SEO and user engagement",
        "Collaborate with design and marketing teams",
        "Edit and proofread content for quality and accuracy"
      ],
      benefits: [
        "Flexible remote work environment",
        "Creative freedom and autonomy",
        "Writing tools and resources",
        "Professional development opportunities",
        "Performance-based incentives"
      ]
    },
    {
      id: 9,
      title: "Sales Executive",
      department: "sales",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "We're seeking a motivated Sales Executive to drive revenue growth and build strong client relationships.",
      requirements: [
        "2+ years of sales experience in tech industry",
        "Strong communication and negotiation skills",
        "Experience with CRM software and sales tools",
        "Understanding of software sales cycles",
        "Ability to build and maintain client relationships",
        "Target-driven mindset with proven track record"
      ],
      responsibilities: [
        "Identify and qualify potential clients",
        "Present and demonstrate our products/services",
        "Negotiate contracts and close deals",
        "Maintain relationships with existing clients",
        "Achieve and exceed sales targets",
        "Provide market feedback and insights"
      ],
      benefits: [
        "Competitive commission structure",
        "Sales incentives and bonuses",
        "Company car and travel allowances",
        "Professional sales training",
        "Career advancement opportunities"
      ]
    },
    {
      id: 10,
      title: "Business Development Manager",
      department: "sales",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Lead our business development efforts to expand market reach and drive strategic partnerships.",
      requirements: [
        "4+ years of business development experience",
        "Strong network in tech industry",
        "Experience with partnership development",
        "Excellent communication and presentation skills",
        "Strategic thinking and problem-solving abilities",
        "Understanding of SaaS business models"
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain strategic partnerships",
        "Develop and implement business development strategies",
        "Represent company at industry events and conferences",
        "Collaborate with product and marketing teams",
        "Analyze market trends and competitive landscape"
      ],
      benefits: [
        "Equity participation and stock options",
        "Executive-level benefits package",
        "Travel and entertainment budget",
        "Leadership role with growth potential",
        "Strategic decision-making influence"
      ]
    },
    {
      id: 11,
      title: "HR Manager",
      department: "hr",
      location: "Noida, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "We're looking for an experienced HR Manager to lead our human resources initiatives and build a great workplace culture.",
      requirements: [
        "3+ years of HR management experience",
        "Knowledge of HR best practices and labor laws",
        "Experience with recruitment and employee relations",
        "Strong communication and interpersonal skills",
        "Experience with HRIS and HR systems",
        "Understanding of performance management systems"
      ],
      responsibilities: [
        "Manage end-to-end recruitment process",
        "Develop and implement HR policies and procedures",
        "Handle employee relations and conflict resolution",
        "Oversee performance management and appraisals",
        "Coordinate training and development programs",
        "Ensure compliance with labor regulations"
      ],
      benefits: [
        "Leadership role with strategic influence",
        "Professional development and certifications",
        "Comprehensive benefits package",
        "Work-life balance initiatives",
        "HR conference and networking opportunities"
      ]
    },
    {
      id: 12,
      title: "Technical Recruiter",
      department: "hr",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description: "Join our HR team to source and hire top technical talent for our growing engineering teams.",
      requirements: [
        "2+ years of technical recruiting experience",
        "Understanding of technology roles and skills",
        "Experience with sourcing platforms and tools",
        "Strong communication and relationship-building skills",
        "Ability to assess technical skills and cultural fit",
        "Experience with applicant tracking systems"
      ],
      responsibilities: [
        "Source and screen technical candidates",
        "Conduct interviews and technical assessments",
        "Build and maintain talent pipelines",
        "Partner with hiring managers to understand requirements",
        "Manage candidate experience and communication",
        "Track and report recruiting metrics"
      ],
      benefits: [
        "Remote work flexibility",
        "Recruiting tools and resources",
        "Performance-based bonuses",
        "Professional development opportunities",
        "Industry networking events"
      ]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Positions' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'hr', name: 'Human Resources' }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleViewMore = () => {
    setVisibleJobsCount(prev => ({
      ...prev,
      [selectedDepartment]: filteredJobs.length
    }));
  };

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    // Reset visible count when changing departments
    setVisibleJobsCount(prev => ({
      ...prev,
      [department]: 3
    }));
  };

  const displayedJobs = filteredJobs.slice(0, visibleJobsCount[selectedDepartment]);

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-center mb-[80px] md:mb-[60px]" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl px-5">
          <h1 className="text-[3.5rem] md:text-[2.8rem] font-semibold mb-6">Careers</h1>
          <p className="text-xl md:text-lg opacity-90 max-w-3xl mx-auto">
            Join our talented team and help us build innovative solutions that make a difference. Grow your career in a collaborative and supportive environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-5 md:px-4">
        {/* Why Join Us Section */}
        <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#000] mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#333] to-[#555] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                  <h3 className="text-xl font-semibold text-[#000] mb-3">Innovation</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Work on cutting-edge projects and technologies that shape the future of our industry.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#333] to-[#555] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000] mb-3">Team Culture</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Join a diverse, inclusive team that values collaboration, creativity, and mutual respect.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#333] to-[#555] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000] mb-3">Growth</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Continuous learning opportunities, career advancement, and professional development support.
              </p>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => handleDepartmentChange(dept.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedDepartment === dept.id
                  ? 'bg-gradient-to-r from-[#333] to-[#555] text-white shadow-lg'
                  : 'bg-slate-50 text-[#4a5568] hover:bg-slate-100 hover:shadow-md'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Professional Job Cards Grid */}
        <div className="mb-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000] mb-4">What Are You Looking For Today?</h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">
                Browse through our open positions and find the perfect opportunity that matches your skills and career goals.
              </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedJobs.map((job, index) => (
              <div 
                key={job.id} 
                className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#333] hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#333] to-[#555] rounded-full"></div>
                      <span className="text-xs font-semibold text-[#333] uppercase tracking-wider">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#000] group-hover:text-[#333] transition-colors mb-3 leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-[#4a5568]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#333] to-[#555] text-white">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-[#4a5568] leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                  {job.description}
                </p>
                
                {/* Key Requirements */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-[#333] uppercase tracking-wider mb-2">Key Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <span key={idx} className="text-xs bg-slate-50 text-[#4a5568] px-2 py-1 rounded-md border border-slate-200">
                        {req.split(' ')[0]} {req.split(' ')[1]}
                      </span>
                    ))}
                    {job.requirements.length > 3 && (
                      <span className="text-xs bg-slate-50 text-[#4a5568] px-2 py-1 rounded-md border border-slate-200">
                        +{job.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Fixed at Bottom */}
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="flex-1 border border-[#333] text-[#333] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#333] hover:text-white transition-all duration-300"
                  >
                    View Details
                  </button>
                  <button className="bg-gradient-to-r from-[#333] to-[#555] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:from-[#555] hover:to-[#666] transition-all duration-300 flex items-center gap-2">
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {filteredJobs.length > visibleJobsCount[selectedDepartment] && (
            <div className="text-center">
              <button 
                onClick={handleViewMore}
                className="bg-gradient-to-r from-[#333] to-[#555] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:from-[#555] hover:to-[#666] transition-all duration-300 inline-flex items-center gap-2"
              >
                View More Positions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-[#333] via-[#444] to-[#555] text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Benefits & Perks</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              We offer competitive benefits and perks to support your personal and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">💰</div>
              <div className="text-sm opacity-80">Competitive Salary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">🏥</div>
              <div className="text-sm opacity-80">Health Insurance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">📚</div>
              <div className="text-sm opacity-80">Learning Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">🏠</div>
              <div className="text-sm opacity-80">Remote Work</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000] mb-4">
            Don't See the Right Fit?
          </h2>
          <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#333] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#555] transition-colors">
              Send Resume
            </button>
            <button className="border-2 border-[#333] text-[#333] px-8 py-4 rounded-lg font-semibold hover:bg-[#333] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#000] mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-slate-50 text-[#4a5568] px-3 py-1 rounded-full">
                      {selectedJob.department}
                    </span>
                    <span className="text-sm bg-slate-50 text-[#4a5568] px-3 py-1 rounded-full">
                      {selectedJob.type}
                    </span>
                    <span className="text-sm bg-slate-50 text-[#4a5568] px-3 py-1 rounded-full">
                      {selectedJob.location}
                    </span>
                    <span className="text-sm bg-slate-50 text-[#4a5568] px-3 py-1 rounded-full">
                      {selectedJob.experience}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#000] mb-3">About the Role</h3>
                  <p className="text-[#4a5568] leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000] mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#4a5568]">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000] mb-3">Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#4a5568]">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000] mb-3">Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#4a5568]">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-200">
                  <button className="bg-[#333] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#555] transition-colors">
                    Apply Now
                  </button>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="border-2 border-gray-300 text-[#333] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
