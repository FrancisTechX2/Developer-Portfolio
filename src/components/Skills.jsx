function Skills() {
  const baseUrl = import.meta.env.BASE_URL
  const skills = [
    { name: "HTML5", iconPath: `${baseUrl}assets/icons/html-icon.png` },
    { name: "CSS3", iconPath: `${baseUrl}assets/icons/css-icon.png` },
    { name: "JavaScript (ES6+)", iconPath: `${baseUrl}assets/icons/javascript-icon.png` },
    { name: "React", iconPath: `${baseUrl}assets/icons/react-icon.png` },
    { name: "TypeScript", iconPath: `${baseUrl}assets/icons/typescript-icon.png` },
    { name: "Node.js", iconPath: `${baseUrl}assets/icons/nodejs-icon.png` },
    { name: "AWS", iconPath: `${baseUrl}assets/icons/aws-icon.png` },
    { name: "Supabase", iconPath: `${baseUrl}assets/icons/supabase-icon.png` },
    { name: "Electron", iconPath: `${baseUrl}assets/icons/electron-icon.png` },
    { name: "Git", iconPath: `${baseUrl}assets/icons/git-icon.png` }
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-[#A020F0] text-2xl md:text-3xl font-bold font-mono">#skills</h2>
          <div className="h-0.5 bg-[#A020F0] flex-1 max-w-md"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="border-2 border-[#A020F0] bg-gray-900 p-6 flex flex-col items-center justify-center hover:bg-[#A020F0] transition-colors">
              <div className={`mb-3 flex items-center justify-center ${
                skill.name === "HTML5" || skill.name === "CSS3" || skill.name === "JavaScript (ES6+)" || skill.name === "React" || skill.name === "TypeScript" || skill.name === "Node.js" || skill.name === "AWS" || skill.name === "Supabase" || skill.name === "Electron" || skill.name === "Git"
                  ? "w-20 h-20" 
                  : "w-16 h-16 bg-gray-800 border border-[#A020F0] overflow-hidden"
              }`}>
                <img 
                  src={skill.iconPath} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-sm font-mono text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
