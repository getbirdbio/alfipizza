'use client'

import Location from '@/components/Location'

export default function Home() {
  return (
    <main className="bg-[#005f3b] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
        <img 
          src="/pizzas/hero-logo.png" 
          alt="Hero Logo" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-8"
        />
        <div className="w-full flex justify-center">
          <img 
            src={`/pizzas/Alfi_Menu_Final14Feb.png?v=${Date.now()}`}
            alt="Alfi Menu" 
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl object-contain"
          />
        </div>
      </div>
      <Location />
    </main>
  )
} 