interface Tool {
  image: string;
  title: string;
}

const tools: Tool[] = [
  { image: "/images/how-it-works/Workspace-01.png", title: "Slack / Microsoft Teams" },
  { image: "/images/how-it-works/Workspace-02.png", title: "Jira / Trello" },
  { image: "/images/how-it-works/Workspace-03.png", title: "Asana / ClickUp" },
  { image: "/images/how-it-works/Workspace-04.png", title: "Project Monitoring" },
  { image: "/images/how-it-works/Workspace-05.png", title: "CRM & Helpdesk Tools" }
];

export default function ToolsDeployment() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1020] mb-3 sm:mb-4">
            Workspace & Tools Deployment
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We integrate with your existing tools and layer in the Oscorm AI dashboard to provide full visibility and control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 mb-3 sm:mb-4 flex items-center justify-center">
                <img 
                  src={tool.image} 
                  alt={tool.title} 
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
              <h6 className="font-semibold text-[#0B1020] text-xs sm:text-sm md:text-base">
                {tool.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

