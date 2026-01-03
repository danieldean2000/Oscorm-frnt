import { UserCheck, Bot, ClipboardCheck, BarChart3, LucideIcon } from 'lucide-react';

interface QualityItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const qualityItems: QualityItem[] = [
  { icon: UserCheck, title: "Senior Reviewer Approval", desc: "Every task passes through expert-level validation." },
  { icon: Bot, title: "AI QA Hints & Alerts", desc: "Smart automation detects quality risks in real time." },
  { icon: ClipboardCheck, title: "Standard SOP Compliance", desc: "Strict process-driven execution ensures consistency." },
  { icon: BarChart3, title: "Delivery Scorecard", desc: "Transparent performance tracking at every stage." }
];

export default function QualityFramework() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Quality-First Delivery Framework
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every output passes through a multi-layer QA system focused on quality, not just completion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {qualityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-5 sm:p-6 lg:p-7 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00D4AA] to-[#00B894] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-[#0B1020] font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

