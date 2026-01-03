import { TrendingUp, RefreshCw, Rocket, Handshake, Zap, LucideIcon } from 'lucide-react';

interface ScalingCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const scalingCards: ScalingCard[] = [
  {
    icon: TrendingUp,
    title: "Scale Whenever You Need",
    desc: "Add more experts, new skill sets, or full pods as your project grows. Scale fast with zero delays, zero friction, and complete flexibility."
  },
  {
    icon: RefreshCw,
    title: "Flexibility at Every Stage",
    desc: "Increase hours, change scope, or scale down anytime without disruption. Your team instantly adjusts to match your project's current needs."
  },
  {
    icon: Rocket,
    title: "Start With a Pilot Week",
    desc: "Begin with a low-risk, paid pilot week to validate real performance. Experience the workflow before committing to a long-term engagement."
  },
  {
    icon: Handshake,
    title: "Commit Long-Term Only If Assured",
    desc: "Move forward only if the talent meets your expectations fully. If it's not the perfect fit, you can stop—simple, safe, and fair."
  },
  {
    icon: Zap,
    title: "Better Model Than Freelancing",
    desc: "Not freelancing, not traditional outsourcing—something far more reliable. A modern global talent model built for speed, quality, and scalable teams."
  }
];

export default function DynamicScaling() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Dynamic Scaling - Zero Complexity
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A modern talent model designed for flexibility, speed, and certainty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {scalingCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2f57c4] to-[#00D4AA] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-md">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#0B1020] mb-2 sm:mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

