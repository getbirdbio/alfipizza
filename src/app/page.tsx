'use client'

import Location from '@/components/Location'

export default function Home() {
  return (
    <main className="bg-[#005f3b] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <img 
          src="/pizzas/hero-logo.png" 
          alt="Hero Logo" 
          className="w-1/2 mx-auto mb-8"
        />
        <img 
          src="/pizzas/Alfi_Menu_Final14Feb.png" 
          alt="Alfi Menu" 
          className="w-1/2 mx-auto"
        />
      </div>
      <Location />
    </main>
  )
} 