import Image from 'next/image';
import { RefreshCw, Lightbulb, AlertTriangle, FileText, Clock, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const leftFeatures: Feature[] = [
  { icon: RefreshCw, title: "Automated daily updates", desc: "Real-time progress tracking and automated reporting" },
  { icon: Lightbulb, title: "QA suggestion engine", desc: "Intelligent quality assurance recommendations" },
  { icon: AlertTriangle, title: "Risk & anomaly alerts", desc: "Proactive detection of potential issues" }
];

const rightFeatures: Feature[] = [
  { icon: FileText, title: "Documentation assistant", desc: "Automated documentation and knowledge management" },
  { icon: Clock, title: "Work log feed & time tracking", desc: "Comprehensive activity monitoring and productivity analysis" }
];

export default function AIEnhancedSetup() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0B1020] via-[#0F4082] to-[#0B1020] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,170,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(47,87,196,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight">AI‑Enhanced Setup</h2>
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-3xl mx-auto px-4 leading-relaxed font-light">
            Oscorm AI configures transparency and automation, while human oversight ensures accuracy at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {leftFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00D4AA]/30">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D4AA]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="text-center order-first lg:order-none">
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto">
              <Image 
                src="/images/how-it-works/pc.png" 
                alt="AI Enhanced Setup Dashboard" 
                width={500} 
                height={400} 
                className="w-full h-auto rounded-2xl shadow-2xl" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {rightFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4AA]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00D4AA]/30">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D4AA]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

