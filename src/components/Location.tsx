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
                Tuesday - Sunday<br />
                4pm - 10pm
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-recoleta text-[#f6f6ed] mb-2 md:mb-4">CONTACT</h3>
              <p className="text-base md:text-lg font-messina text-[#f6f6ed] leading-relaxed">
                <a href="mailto:hello@alfipizza.co.za" className="hover:opacity-80 transition-opacity">hello@alfipizza.co.za</a>
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