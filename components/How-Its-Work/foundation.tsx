interface FoundationCard {
  image: string;
  title: string;
  desc: string;
}

const foundationCards: FoundationCard[] = [
  {
    image: "/images/how-it-works/01.png",
    title: "Role & Capability Specification",
    desc: "We determine the exact functional roles, skill sets, technical proficiencies, and experience levels required to achieve your strategic objectives."
  },
  {
    image: "/images/how-it-works/02.png",
    title: "Scope, Deliverables & Execution Timeline",
    desc: "We outline clear expectations by defining scope, measurable outcomes, delivery cadence, milestones, and success checkpoints across the engagement."
  },
  {
    image: "/images/how-it-works/03.png",
    title: "Systems, Workflow & Collaboration Framework",
    desc: "We align on platforms, integrations, security standards, timezone coordination, communication protocols, and operational workflows to ensure seamless execution."
  },
  {
    image: "/images/how-it-works/04.png",
    title: "Commercial Model & Engagement Structure",
    desc: "We finalize the budgeting approach, billing format, contractual model, service tiers, and resource structure (dedicated, hybrid, or scalable pod) to match operational and financial strategy."
  }
];

export default function Foundation() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Foundation: Your Goals & Needs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything you share is turned into a clear plan for the right talent and how the work will run.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {foundationCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-full mb-4 sm:mb-5 rounded-lg overflow-hidden flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#0B1020] mb-2 sm:mb-3 text-center min-h-[56px] sm:min-h-[60px] flex items-center justify-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

