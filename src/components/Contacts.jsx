import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  const [copyMessage, setCopyMessage] = useState('')

  const handleDiscordCopy = async () => {
    const username = 'fcis_Dev'
    try {
      await navigator.clipboard.writeText(username)
      setCopyMessage('Discord username copied!')
      setTimeout(() => setCopyMessage(''), 2000)
    } catch (err) {
      console.error('Failed to copy Discord username:', err)
    }
  }

  return (
    <section id="contact-me" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          {copyMessage && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300">
              <div className="border-2 border-[#A020F0] bg-gray-900 px-6 py-3 rounded shadow-lg">
                <p className="text-white font-mono">{copyMessage}</p>
              </div>
            </div>
          )}
          <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-[#A020F0] text-2xl md:text-3xl font-bold font-mono">#contact-me</h2>
          <div className="h-0.5 bg-[#A020F0] flex-1 max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-center">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              If you'd like to get in touch or work together, feel free to reach out. I'm open to freelance opportunities and collaborations.
            </p>
          </div>

          <div className="border-2 border-[#A020F0] bg-gray-900 p-6 sm:p-8">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-6 font-mono">Message me here</h3>
            <div className="space-y-4">
              <button
                onClick={handleDiscordCopy}
                className="flex items-center space-x-4 hover:text-[#A020F0] transition-colors text-left w-full"
                type="button"
              >
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-white font-mono text-sm sm:text-base break-all">fcis_Dev</span>
              </button>
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-mono text-xs sm:text-sm md:text-base break-all">contact.franciskierzkiewicz@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

