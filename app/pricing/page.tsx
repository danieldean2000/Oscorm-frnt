'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PricingFaqSection from '@/components/ui/pricing-faq';

interface PricingProps {
  className?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
}

export default function Pricing({ className = "" }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$299' : '$2,988',
      description: 'Perfect for small teams and startups getting started with remote talent',
      features: [
        'Up to 10 team members',
        'Basic talent matching',
        'Standard email support',
        'Monthly reporting',
        'Time tracking integration',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$799' : '$7,788',
      description: 'Ideal for growing businesses that need dedicated teams and advanced features',
      features: [
        'Up to 50 team members',
        'AI-powered talent matching',
        'Priority 24/7 support',
        'Advanced project management',
        'Dedicated account manager',
        'Custom integrations & API access',
        'SLA guarantee (99.9% uptime)'
      ],
      popular: true,
      highlighted: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Unlimited team members',
        'Premium talent matching',
        '24/7 dedicated support with < 1hr response',
        'Enterprise-grade security & compliance',
        'Custom workflow automation',
        'Full API access & webhooks',
        'Dedicated success team',
        'On-premise deployment option'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Dedicated Team',
      price: 'Starting at $2,999/month',
      description: 'Full-time dedicated team for your projects',
      features: ['5-10 team members', 'Project manager included', 'Weekly sprints', 'Direct communication']
    },
    {
      name: 'Project-Based',
      price: 'Custom quote',
      description: 'Fixed-price projects with clear deliverables',
      features: ['Defined scope', 'Fixed timeline', 'Milestone payments', 'Quality guarantee']
    },
    {
      name: 'Hourly Consulting',
      price: '$150-300/hour',
      description: 'Expert consultation for specific needs',
      features: ['Flexible scheduling', 'Expert consultants', 'Pay-as-you-go', 'Quick availability']
    }
  ];

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-center mb-[80px] md:mb-[60px]" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl px-5">
          <h1 className="text-[3.5rem] md:text-[2.8rem] font-semibold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl md:text-lg opacity-90 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, flexible contracts, and scalable solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-16 px-5 md:px-4">
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex items-center">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#333] shadow-sm'
                  : 'text-gray-600 hover:text-[#333]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#333] shadow-sm'
                  : 'text-gray-600 hover:text-[#333]'
              }`}
            >
              Annual Billing
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Plans Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Choose Your Perfect Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options tailored to meet your business needs. Scale as you grow with our transparent pricing.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-white shadow-2xl border-2 border-gray-700'
                  : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-gray-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-gray-700 hover:bg-gray-100'
                      : 'bg-gray-700 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need something different? We offer flexible service options to match your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#333] mb-2">{service.name}</h3>
                <p className="text-[#333] font-medium mb-3">{service.price}</p>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full border border-[#333] text-[#333] py-2 rounded-lg font-medium hover:bg-[#333] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <PricingFaqSection />
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust OSCORM for their talent needs. Start with a free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#333] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#555] transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-[#333] text-[#333] px-8 py-4 rounded-lg font-semibold hover:bg-[#333] hover:text-white transition-colors">
              Schedule Demo
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
