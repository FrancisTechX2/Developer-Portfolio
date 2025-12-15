import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

