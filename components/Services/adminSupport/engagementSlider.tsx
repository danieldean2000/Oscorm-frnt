'use client';

import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Creative Retainer',
    subtitle: 'A continuous, high-volume creative subscription available every month.',
    description:
      'Submit requests through your dashboard, and we provide prioritization and delivery in sprints. All assets go through PM review, QA, and version tracking.',
    image: '/images/services/admin-support/Engagement1.png',
    cta: 'Learn More'
  },
  {
    id: 2,
    title: 'Dedicated Team',
    subtitle: 'Full-time, managed specialists embedded into your workflows.',
    description:
      'Handpicked team aligned to your workflows, with PM supervision and real-time reporting to ensure predictable delivery.',
    image: '/images/services/admin-support/Engagement1.png',
    cta: 'Explore Team'
  },
  {
    id: 3,
    title: 'Project-Based Engagement',
    subtitle: 'Fixed-scope projects with clear milestones and deliverables.',
    description:
      'Structured delivery with kickoff, milestones, and QA gates to ensure every project meets your quality bar and deadlines.',
    image: '/images/services/admin-support/Engagement1.png',
    cta: 'Get Proposal'
  }
];

export default function EngagementSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  function go(i: number) {
    setIndex(i);
  }
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="py-12 px-4 lg:px-20 bg-gradient-to-r from-[#0B1020] to-[#0F4082] my-16 pb-20">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Engagement Models Built for Your Needs</h3>

        <div className="relative">
          <div className="rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 lg:p-10 shadow-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left - Text */}
              <div className="flex flex-col justify-center text-white lg:pr-8 order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">{slides[index].title}</h2>
                <p className="text-slate-200 max-w-xl mb-6">{slides[index].description}</p>
                <div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
                    {slides[index].cta}
                  </button>
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="w-full rounded-xl overflow-hidden shadow-2xl max-w-xl border-2 border-white/30">
                  <img
                    src={slides[index].image}
                    alt={slides[index].title}
                    className="w-full h-64 md:h-80 lg:h-72 object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls - arrows */}
          <div className="absolute left-0 right-0 bottom-[-50px] flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-slate-800/60 text-white flex items-center justify-center shadow-lg"
              aria-label="Previous"
            >
              ‹
            </button>

            <div className="flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  className={`w-3 h-3 rounded-full ${i === index ? 'bg-teal-400' : 'bg-slate-300/60'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-slate-800/60 text-white flex items-center justify-center shadow-lg"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
