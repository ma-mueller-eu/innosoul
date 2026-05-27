import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Team from './components/Team'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [currentSection, setCurrentSection] = useState('hero')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 68
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setCurrentSection(id)
  }

  useEffect(() => {
    const sections = ['hero', 'leistungen', 'branchen', 'ueber-uns', 'referenzen', 'kontakt']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header currentSection={currentSection} onNav={scrollToSection} />
      <main>
        <Hero onNav={scrollToSection} />
        <Services />
        <Industries />
        <Team />
        <References />
        <Contact />
      </main>
      <Footer onNav={scrollToSection} />
    </>
  )
}

export default App
