'use client'

interface StoreCardProps {
  location: string
  city: string
  address: string[]
  phone: string
  phoneHref: string
  email: string
  mapSrc: string
  isNew?: boolean
}

function StoreCard({ location, city, address, phone, phoneHref, email, mapSrc, isNew }: StoreCardProps) {
  return (
    <div className="bg-[#f6f6ed] rounded-lg p-6 md:p-8 w-full max-w-md">
      {isNew && (
        <span className="bg-[#005f3b] text-[#f6f6ed] text-xs font-bold px-3 py-1 rounded-full float-right">
          NEW
        </span>
      )}
      <p className="text-[#005f3b] text-sm font-messina uppercase tracking-wider mb-1">{location}</p>
      <h3 className="text-3xl md:text-4xl font-recoleta text-[#005f3b] mb-6">{city}</h3>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-lg font-recoleta text-[#005f3b] mb-2">Find us</h4>
          <p className="text-sm font-messina text-[#005f3b] leading-relaxed">
            {address.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-recoleta text-[#005f3b] mb-2">Opening hours</h4>
          <p className="text-sm font-messina text-[#005f3b] leading-relaxed">
            Monday – Sunday<br />
            Lunch | 12:00 to 17:00<br />
            Dinner | 17:00 to 21:00
          </p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-recoleta text-[#005f3b] mb-2">Contact</h4>
        <p className="text-sm font-messina text-[#005f3b] flex flex-col gap-1">
          <a href={phoneHref} className="flex items-center gap-2 hover:opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            {phone}
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            {email}
          </a>
        </p>
      </div>
      
      <div className="w-full h-[200px] rounded-lg overflow-hidden">
        <a 
          href={mapSrc.replace('/embed?', '/place?')} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#005f3b] text-sm flex items-center gap-1 mb-2 hover:opacity-70"
        >
          Open in Maps
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
          </svg>
        </a>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default function Location() {
  return (
    <section className="w-full py-12 md:py-20 bg-[#005f3b]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-recoleta text-[#f6f6ed] text-center mb-4">OUR LOCATIONS</h2>
        <p className="text-lg font-messina text-[#f6f6ed] text-center mb-12">A Crispy Neopolitan Hybrid... No Flop</p>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
          {/* Cape Town Store */}
          <StoreCard
            location="Sea Point"
            city="Cape Town"
            address={['158 Main Road', 'Sea Point', 'Cape Town, 8005']}
            phone="+27 60 827 8803"
            phoneHref="tel:+27608278803"
            email="hellocpt@alfipizza.co.za"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2680942246366!2d18.389699!3d-33.917799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67a18b5fa82d%3A0x735b6e8bb8659aa8!2s158%20Main%20Rd%2C%20Sea%20Point%2C%20Cape%20Town%2C%208060!5e0!3m2!1sen!2sza!4v1703072119407!5m2!1sen!2sza"
          />
          
          {/* Johannesburg Store */}
          <StoreCard
            location="Birdhaven"
            city="Johannesburg"
            address={['74 St Andrew Street', 'Birdhaven', 'Johannesburg, 2192']}
            phone="+27 60 508 3865"
            phoneHref="tel:+27605083865"
            email="hellojhb@alfipizza.co.za"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d28.045!3d-26.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s74%20St%20Andrew%20St%2C%20Birdhaven%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1703072119407!5m2!1sen!2sza"
            isNew
          />
        </div>
      </div>
    </section>
  )
}
