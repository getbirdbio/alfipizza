'use client'

export default function Location() {
  return (
    <section className="py-16 bg-[#005f3b]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">LOCATION</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Address Information */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h3 className="text-2xl font-recoleta text-[#f6f6ed] mb-4">FIND US</h3>
              <p className="text-lg font-messina text-[#f6f6ed] leading-relaxed">
                158 Main Road<br />
                Sea Point<br />
                Cape Town, 8005
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-recoleta text-[#f6f6ed] mb-4">OPENING HOURS</h3>
              <p className="text-lg font-messina text-[#f6f6ed] leading-relaxed">
                Monday - Sunday<br />
                11:00 - 22:00
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-recoleta text-[#f6f6ed] mb-4">CONTACT</h3>
              <p className="text-lg font-messina text-[#f6f6ed] leading-relaxed">
                <a href="mailto:info@alfipizza.co.za" className="hover:opacity-80 transition-opacity">info@alfipizza.co.za</a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-[600px] h-[400px] rounded-lg overflow-hidden">
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