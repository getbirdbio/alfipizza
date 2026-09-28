'use client'

const CAPE_TOWN_MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2680942246366!2d18.389699!3d-33.917799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67a18b5fa82d%3A0x735b6e8bb8659aa8!2s158%20Main%20Rd%2C%20Sea%20Point%2C%20Cape%20Town%2C%208060!5e0!3m2!1sen!2sza!4v1703072119407!5m2!1sen!2sza'

const JOHANNESBURG_MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.442650041838!2d28.04659037541179!3d-26.13943346452174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c9535780a4d%3A0x8035ed8a25c11099!2s74+St+Andrew+St%2C+Birdhaven%2C+Johannesburg%2C+2192!5e0!3m2!1sen!2sza!4v1718970000000!5m2!1sen!2sza'

export default function Location() {
  return (
    <section className="w-full py-10 md:py-20 bg-[#005f3b] border-t border-[#f6f6ed]/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-recoleta text-[#f6f6ed] text-center mb-3">
          OUR LOCATIONS
        </h2>
        <p className="font-messina text-[#f6f6ed]/70 text-center text-base md:text-lg mb-10 md:mb-16 max-w-xl mx-auto">
          A Crispy Neopolitan Hybrid... No Flop
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <LocationCard
            city="Cape Town"
            suburb="Sea Point"
            address={['158 Main Road', 'Sea Point', 'Cape Town, 8005']}
            phone="+27 60 827 8803"
            phoneHref="tel:+27608278803"
            email="hellocpt@alfipizza.co.za"
            mapSrc={CAPE_TOWN_MAP}
            dinnerClose="21:00"
          />

          <LocationCard
            city="Johannesburg"
            suburb="Birdhaven"
            isNew
            address={['74 St Andrew Street', 'Birdhaven', 'Johannesburg, 2192']}
            phone="+27 60 508 3865"
            phoneHref="tel:+27605083865"
            email="hellojhb@alfipizza.co.za"
            mapSrc={JOHANNESBURG_MAP}
            dinnerClose="20:00"
          />
        </div>
      </div>
    </section>
  )
}

function LocationCard({
  city,
  suburb,
  address,
  phone,
  phoneHref,
  email,
  mapSrc,
  dinnerClose = '21:00',
  isNew = false,
}: {
  city: string
  suburb: string
  address: string[]
  phone: string
  phoneHref: string
  email: string
  mapSrc: string
  dinnerClose?: string
  isNew?: boolean
}) {
  return (
    <article className="bg-[#f6f6ed] rounded-2xl overflow-hidden shadow-xl flex flex-col">
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-messina text-[#005f3b]/60 text-xs uppercase tracking-[0.15em] mb-1">
            {suburb}
          </p>
          <h3 className="font-recoleta text-3xl md:text-4xl text-[#005f3b]">{city}</h3>
        </div>
        {isNew && (
          <span className="shrink-0 bg-[#005f3b] text-[#f6f6ed] font-messina text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
            New
          </span>
        )}
      </div>

      <div className="px-6 md:px-8 pb-6 md:pb-8 flex flex-col gap-6 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-recoleta text-lg text-[#005f3b] mb-2">Find us</h4>
            <p className="font-messina text-[#005f3b]/80 text-sm leading-relaxed">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h4 className="font-recoleta text-lg text-[#005f3b] mb-2">Opening hours</h4>
            <p className="font-messina text-[#005f3b]/80 text-sm leading-relaxed">
              Monday – Sunday
              <br />
              Lunch | 12:00 to 17:00
              <br />
              Dinner | 17:00 to {dinnerClose}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-recoleta text-lg text-[#005f3b] mb-2">Contact</h4>
          <div className="flex flex-col gap-2">
            <a
              href={phoneHref}
              className="font-messina text-[#005f3b] text-sm hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <PhoneIcon />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-messina text-[#005f3b] text-sm hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <EmailIcon />
              {email}
            </a>
          </div>
        </div>

        <div className="w-full h-[200px] md:h-[220px] rounded-lg overflow-hidden mt-auto">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map — Alfi Pizza ${city}`}
          />
        </div>
      </div>
    </article>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  )
}
