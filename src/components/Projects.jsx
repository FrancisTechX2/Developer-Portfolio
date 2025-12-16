function Projects() {
  const projects = [
    {
      title: "Parish Website for Parafia Wyszyńskiego",
      technologies: "HTML, CSS, JavaScript, Velo by Wix",
      description: "Developed a website for a local church to provide parishioners with information about events, services, and contact details. The site ensures easy navigation and a user-friendly experience for the community.",
      image: "project1"
    },
    {
      title: " Private SaaS Desktop App & Backend Website",
      technologies: "HTML, CSS, JavaScript, React, Node.js, Electron",
      description: "Developed a SaaS-style desktop application using Electron and React, integrated with a Node.js backend website. The project focuses on building a modern desktop interface connected to a web-based backend, following a full-stack application structure.",
      image: "project2"
    },
    {
      title: "SaveMore (Mobile App)",
      technologies: "React (Native), TypeScript, Expo, Node.js, Supabase, Git & GitHub",
      description: "Developing SaveMore, a smart budgeting mobile app with AI features that helps users track spending, manage budgets, and save efficiently. Soon available cross-platform on all major devices — iOS, Android, and a full web version.",
      image: "project3"
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-[#A020F0] text-2xl md:text-3xl font-bold font-mono">#projects</h2>
          <div className="h-0.5 bg-[#A020F0] flex-1 max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-700 bg-gray-900 p-6 hover:border-[#A020F0] transition-colors">
              <div className="h-48 mb-4 flex items-center justify-center border border-gray-700 overflow-hidden bg-gray-800">
                {index === 0 ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/icons/parafia-logo.svg`} 
                    alt={project.title}
                    className="w-32 h-32 object-contain"
                  />
                ) : index === 1 ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/photos/saas-project.png`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/icons/ios-icon.png`} 
                    alt={project.title}
                    className="w-32 h-32 rounded-[22%] object-contain"
                  />
                )}
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2 font-mono">{project.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">{project.technologies}</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">{project.description}</p>
              {index === 0 ? (
                <a 
                  href="https://parafiawyszynskiego.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#A020F0] text-white px-4 py-2 hover:bg-[#A020F0] transition-colors font-mono text-sm w-full block text-center"
                >
                  Live &lt;-&gt;
                </a>
              ) : index === 1 ? (
                <a 
                  href="https://github.com/terk678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#A020F0] text-white px-4 py-2 hover:bg-[#A020F0] transition-colors font-mono text-sm w-full block text-center"
                >
                  View GitHub
                </a>
              ) : (
                <button 
                  disabled
                  className="border-2 border-gray-600 text-gray-500 px-4 py-2 cursor-not-allowed opacity-60 font-mono text-sm w-full"
                >
                  Currently in development, available soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

