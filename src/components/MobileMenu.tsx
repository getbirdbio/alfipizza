'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/menu" 
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/location" 
              className="px-3 py-2 text-sm font-medium hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link 
              href="/order" 
              className="px-3 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 