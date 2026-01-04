import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  const [copyMessage, setCopyMessage] = useState('')

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.6,
      behavior: 'smooth'
    });
  };

  const showCopied = (message) => {
    setCopyMessage(message)
    setTimeout(() => setCopyMessage(''), 2000)
  }

  const handleEmailClick = async () => {
    const email = 'contact.franciskierzkiewicz@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      showCopied('Email copied!')
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleDiscordClick = async () => {
    const username = 'fcis_Dev'
    try {
      await navigator.clipboard.writeText(username)
      showCopied('Discord username copied!')
    } catch (err) {
      console.error('Failed to copy Discord username:', err)
    }
  }

  return (
    <section id="home" className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Email Copied Popup */}
      {copyMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300">
          <div className="border-2 border-[#A020F0] bg-gray-900 px-6 py-3 rounded shadow-lg">
            <p className="text-white font-mono">{copyMessage}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Sidebar - Social Icons */}
          <div className="hidden lg:flex flex-col space-y-6 lg:col-span-1 items-center">
            {/* 1st - GitHub */}
            <a href="https://github.com/FrancisTechX2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A020F0] transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            {/* 2nd - Discord */}
            <button 
              onClick={handleDiscordClick}
              className="text-white hover:text-[#A020F0] transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
              type="button"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
            </button>
            {/* 3rd - Email (copy to clipboard) */}
            <button 
              onClick={handleEmailClick}
              className="text-white hover:text-[#A020F0] transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center justify-center"
              type="button"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono leading-tight">
              Hi, I'm{' '}
              <span className="bg-[#A020F0] px-2 py-1">Francis</span>
              {', an aspiring '}
              <span className="bg-[#A020F0] px-2 py-1">software engineer</span>
              .
            </h1>
            <p className="text-gray-400 mb-8 text-base sm:text-lg md:text-xl">
            Currently exploring data-driven development and cloud technologies to build scalable web and software solutions.
            </p>
            <button 
              onClick={handleScrollDown}
              className="border-2 border-[#A020F0] text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#A020F0] transition-colors font-mono text-sm sm:text-base"
            >
              Scroll Down ↓
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#A020F0] opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-white opacity-20"></div>
              
              {/* User image gg */}
              <div className="w-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-4 border-[#A020F0] overflow-hidden flex items-center justify-center">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/photos/me.png`} 
                    alt="Francis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Currently working on box */}
              <div className="mt-6 border-2 border-[#A020F0] bg-black p-4 flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#A020F0]"></div>
                <span className="text-white font-mono">Developing SaveMore, a mobile budgeting application.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

