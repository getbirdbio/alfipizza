'use client'

import Location from '@/components/Location'
import OrderWidget from '@/components/OrderWidget'

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
          <div className="flex flex-col md:flex-row gap-2 max-w-7xl">
            <img 
              src={`/pizzas/Alfi_Menu_Website.png?v=${Date.now()}`}
              alt="Alfi Menu Page 1" 
              className="w-full md:w-1/2 max-w-md md:max-w-lg lg:max-w-2xl object-contain"
            />
            <img 
              src={`/pizzas/Alfi_Menu_Website (1).png?v=${Date.now()}`}
              alt="Alfi Menu Page 2" 
              className="w-full md:w-1/2 max-w-md md:max-w-lg lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
      <Location />
      <OrderWidget />
    </main>
  )
} 