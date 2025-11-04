'use client'

export default function OrderWidget() {
  return (
    <a
      href="https://www.meandu.app/alfi"
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  )
} 