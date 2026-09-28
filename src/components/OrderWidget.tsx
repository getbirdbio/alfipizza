'use client'

import { useEffect, useState } from 'react'

const STORES = [
  {
    id: 'cpt',
    name: 'Cape Town',
    suburb: 'Sea Point',
    href: 'https://www.meandu.app/alfi',
  },
  {
    id: 'jhb',
    name: 'Johannesburg',
    suburb: 'Birdhaven',
    href: 'https://www.meandu.app/alfipizzajhb',
    isNew: true,
  },
] as const

export default function OrderWidget() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#f6f6ed] text-[#005f3b] px-6 py-4 rounded-full font-recoleta text-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 z-50 flex items-center gap-2"
      >
        <span>Order Now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-store-title"
        >
          <button
            type="button"
            aria-label="Close store picker"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#f6f6ed] rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
              <div>
                <h2 id="order-store-title" className="font-recoleta text-2xl text-[#005f3b]">
                  Choose your store
                </h2>
                <p className="font-messina text-[#005f3b]/70 text-sm mt-1">
                  Select a location to order online
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="text-[#005f3b]/60 hover:text-[#005f3b] transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-6 flex flex-col gap-3">
              {STORES.map((store) => (
                <a
                  key={store.id}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between gap-4 rounded-xl border-2 border-[#005f3b]/15 bg-white px-5 py-4 hover:border-[#005f3b] hover:bg-[#005f3b]/5 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-recoleta text-xl text-[#005f3b]">{store.name}</p>
                      {'isNew' in store && store.isNew && (
                        <span className="bg-[#005f3b] text-[#f6f6ed] font-messina text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <p className="font-messina text-[#005f3b]/60 text-sm">{store.suburb}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#005f3b] group-hover:translate-x-0.5 transition-transform shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
