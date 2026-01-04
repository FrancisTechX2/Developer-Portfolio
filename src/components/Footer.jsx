import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          </div>
          <div className="text-white text-xs sm:text-sm font-mono text-center md:text-left px-4 break-words">
            © Copyright 2025. Made by Francis Kierzkiewicz, design by <a href="https://dribbble.com/thakuraman9191" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A020F0] transition-colors">Thakur Aman</a>.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white font-mono text-sm sm:text-base">Media</span>
            <a href="https://github.com/FrancisTechX2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A020F0] transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a href="https://www.figma.com/@franciskierzkie" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A020F0] transition-colors">
              <FontAwesomeIcon icon={faFigma} className="w-5 h-5" />
            </a>
            <a href="https://stackoverflow.com/users/23473951/developer-07" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A020F0] transition-colors">
              <FontAwesomeIcon icon={faStackOverflow} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

