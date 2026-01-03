interface ExecutionItem {
  image: string;
  title: string;
}

const executionItems: ExecutionItem[] = [
  { image: "/images/how-it-works/execution-01.png", title: "Task Assignment & Tracking" },
  { image: "/images/how-it-works/execution-02.png", title: "Progress Monitoring" },
  { image: "/images/how-it-works/execution-03.png", title: "Quality Assurance" },
  { image: "/images/how-it-works/execution-04.png", title: "Client Feedback Loop" },
  { image: "/images/how-it-works/execution-05.png", title: "Iterative Improvement" }
];

export default function ProjectExecution() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Project Execution
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Execution starts right away with structured workflows and complete transparency across every task.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {executionItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-32 sm:h-36 md:h-40 lg:h-44 flex items-center justify-center mb-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
              <h6 className="font-semibold text-[#0B1020] text-xs sm:text-sm md:text-base mt-1">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

