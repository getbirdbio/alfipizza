'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('garlic')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['garlic', 'the-classics', 'alfi-favs', 'dip-sauce']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-[#005f3b] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/pizzas/hero-logo.png"
            alt="Alfi Pizza Logo"
            width={324}
            height={162}
            priority
            className="w-auto h-auto"
          />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center font-messina text-[#f6f6ed] text-sm sm:text-base leading-relaxed">
            Our cherished sourdough is hand-rolled and made from scratch daily on-site. Our menu features a mix of traditional and artisanal recipes, lovingly crafted and cooked to perfection in our wood-fired ovens, as our pizzaiolos embrace the live-fire approach to cooking, staying true to the natural, vibrant character of our sourdough. Thank you for sharing this experience with us.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={() => scrollToSection('garlic')}
            className={`text-2xl font-recoleta text-[#f6f6ed] hover:opacity-80 transition-opacity ${
              activeSection === 'garlic' ? 'opacity-100' : 'opacity-70'
            }`}
          >
            GARLIC
          </button>
          <span className="text-2xl font-recoleta text-[#f6f6ed] opacity-70">•</span>
          <button
            onClick={() => scrollToSection('classics')}
            className={`text-2xl font-recoleta text-[#f6f6ed] hover:opacity-80 transition-opacity ${
              activeSection === 'classics' ? 'opacity-100' : 'opacity-70'
            }`}
          >
            THE CLASSICS
          </button>
          <span className="text-2xl font-recoleta text-[#f6f6ed] opacity-70">•</span>
          <button
            onClick={() => scrollToSection('alfi-favs')}
            className={`text-2xl font-recoleta text-[#f6f6ed] hover:opacity-80 transition-opacity ${
              activeSection === 'alfi-favs' ? 'opacity-100' : 'opacity-70'
            }`}
          >
            ALFI FAVS
          </button>
          <span className="text-2xl font-recoleta text-[#f6f6ed] opacity-70">•</span>
          <button
            onClick={() => scrollToSection('dips')}
            className={`text-2xl font-recoleta text-[#f6f6ed] hover:opacity-80 transition-opacity ${
              activeSection === 'dips' ? 'opacity-100' : 'opacity-70'
            }`}
          >
            DIP SAUCE
          </button>
        </div>
      </div>
    </nav>
  )
} 