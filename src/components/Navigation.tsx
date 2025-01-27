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
      const sections = ['garlic', 'the-classics', 'alfi-favs']
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
            Our sourdough? It&apos;s the MVP—hand-rolled and made fresh on the daily, right here in-house. Our menu is a vibe, featuring a mix of OG classics and next-level creations, all cooked up in our wood-fired ovens. Our pizzaiolos are basically sourdough DJs, spinning that dough magic to bring out bold, natural flavors. Thanks for rolling with us—now grab a slice and let&apos;s make it a moment!
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
        </div>
      </div>
    </nav>
  )
} 