import { ClipboardCheck, Calendar, MessageSquare, BarChart3, LucideIcon } from 'lucide-react';

interface TeamMember {
  image: string;
  title: string;
  desc: string;
}

interface DeliveryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const teamMembers: TeamMember[] = [
  { image: "/images/how-it-works/pm-delivery-setup-1.png", title: "Project Manager", desc: "Execution & Coordination" },
  { image: "/images/how-it-works/pm-delivery-setup-2.png", title: "QA Lead", desc: "Quality & Accuracy Assurance" },
  { image: "/images/how-it-works/pm-delivery-setup-3.png", title: "Client Success Partner", desc: "Alignment & Communication" }
];

const deliveryItems: DeliveryItem[] = [
  { icon: ClipboardCheck, title: "Sprint & Task Planning", desc: "Weekly sprint goals & task breakdown for smooth execution." },
  { icon: Calendar, title: "Deliverable Timeline Framework", desc: "Team-wise task assignment with priority tracking." },
  { icon: MessageSquare, title: "Communication Structure", desc: "Agreed channel setup (Slack, Teams, Email) and meeting rhythms to keep everything aligned." },
  { icon: BarChart3, title: "Reporting & Performance System", desc: "Weekly progress reports, blockers tracking, and measurable output visibility." }
];

export default function PMDeliverySetup() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            PM & Delivery Setup
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We set the delivery framework that brings clarity and alignment, ensuring your team operates efficiently and transparently from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Big Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            {/* Image at top */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] h-auto">
                <img 
                  src="/images/how-it-works/pm-delivery-setup.png" 
                  alt="Delivery Team" 
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
            
            {/* Text below image */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1020] mb-2 sm:mb-3">Your Dedicated Delivery Team</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                A specialized delivery team ensures smooth execution, quality control, and seamless communication throughout the project.
              </p>
            </div>
            
            {/* Team Members with Images */}
            <div className="space-y-3 sm:space-y-4">
              {teamMembers.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 mt-0.5">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700 font-semibold text-sm sm:text-base block mb-1">{item.title} —</span>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {deliveryItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-[#0B1020] mb-1.5 sm:mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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

