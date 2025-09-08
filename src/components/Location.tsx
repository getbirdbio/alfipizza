'use client'

export default function Location() {
  return (
    <section className="w-full py-8 md:py-16 bg-[#005f3b]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-recoleta text-[#f6f6ed] text-center mb-8 md:mb-16">LOCATION</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          {/* Address Information */}
          <div className="text-center md:text-left w-full">
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-recoleta text-[#f6f6ed] mb-2 md:mb-4">FIND US</h3>
              <p className="text-base md:text-lg font-messina text-[#f6f6ed] leading-relaxed">
                158 Main Road<br />
                Sea Point<br />
                Cape Town, 8005
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-recoleta text-[#f6f6ed] mb-2 md:mb-4">OPENING HOURS</h3>
              <p className="text-base md:text-lg font-messina text-[#f6f6ed] leading-relaxed">
                Monday - Sunday<br />
                Lunch - 12:00 - 17:00<br />
                Dinner - 17:00 - CLOSED
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-recoleta text-[#f6f6ed] mb-2 md:mb-4">CONTACT</h3>
              <p className="text-base md:text-lg font-messina text-[#f6f6ed] leading-relaxed flex flex-col gap-2">
                <a 
                  href="https://wa.me/27749303839" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  +27 74 930 3839
                </a>
                <a 
                  href="mailto:hello@alfipizza.co.za" 
                  className="hover:opacity-80 transition-opacity flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  hello@alfipizza.co.za
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mt-6 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2680942246366!2d18.389699!3d-33.917799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67a18b5fa82d%3A0x735b6e8bb8659aa8!2s158%20Main%20Rd%2C%20Sea%20Point%2C%20Cape%20Town%2C%208060!5e0!3m2!1sen!2sza!4v1703072119407!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 