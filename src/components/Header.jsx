function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 text-white font-mono text-sm sm:text-base md:text-lg truncate max-w-[50%]">
            <img src="/logo.png" alt="Logo" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain flex-shrink-0" />
            <span>Francis Kierzkiewicz</span>
          </div>
          <nav className="hidden md:flex space-x-3 lg:space-x-6 flex-shrink-0">
            <a href="#home" className="text-white hover:text-[#A020F0] transition-colors font-mono text-sm lg:text-base whitespace-nowrap">#home</a>
            <a href="#projects" className="text-white hover:text-[#A020F0] transition-colors font-mono text-sm lg:text-base whitespace-nowrap">#projects</a>
            <a href="#skills" className="text-white hover:text-[#A020F0] transition-colors font-mono text-sm lg:text-base whitespace-nowrap">#skills</a>
            <a href="#about-me" className="text-white hover:text-[#A020F0] transition-colors font-mono text-sm lg:text-base whitespace-nowrap">#about-me</a>
            <a href="#contact-me" className="text-white hover:text-[#A020F0] transition-colors font-mono text-sm lg:text-base whitespace-nowrap">#contact-me</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

