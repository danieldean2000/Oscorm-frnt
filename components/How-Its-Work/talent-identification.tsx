import { ClipboardCheck, UserCheck, MessageSquare, Handshake, LucideIcon } from 'lucide-react';

interface TalentItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const talentItems: TalentItem[] = [
  {
    icon: ClipboardCheck,
    title: "Skill & Technical Assessment",
    desc: "We evaluate candidates through role-specific tests and real-world task simulations to ensure they have the exact expertise required. Only those who demonstrate proven capability make it through."
  },
  {
    icon: UserCheck,
    title: "Portfolio & Background Check",
    desc: "We verify past work, experience, and credibility through portfolio review, references, and background validation. This confirms authenticity and ensures consistency in prior performance."
  },
  {
    icon: MessageSquare,
    title: "Communication Screening",
    desc: "Candidates are assessed for clarity, fluency, professionalism, and responsiveness to ensure smooth collaboration. This ensures they communicate effectively across global teams and time zones."
  },
  {
    icon: Handshake,
    title: "Culture & Reliability Fit",
    desc: "Candidates are evaluated for mindset, work ethic, ownership, adaptability, and long-term commitment. This ensures the talent integrates seamlessly with your team and workflow."
  }
];

export default function TalentIdentification() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Strategic Talent Identification
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We deliver multiple rigorously vetted talent profiles within 24–48 hours all aligned to your exact role requirements and expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {talentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#0B1020] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

