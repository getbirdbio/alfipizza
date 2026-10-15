export const SITE_URL = 'https://www.alfipizza.co.za'
export const ORDER_URL =
  'https://order.nowish.co.za/merchants/alfi-pizza-birdhaven'
export const ORDER_URL_SEA_POINT =
  'https://order.nowish.co.za/merchants/alfi-pizza-seapoint'
export const GA_MEASUREMENT_ID = 'G-7502HPRWHL'
export const META_PIXEL_ID = '1369589242904037'
export const GA_LINKER_DOMAINS = [
  'zapahead.co.za',
  'nowish.co.za',
  'order.nowish.co.za',
]

export const SERVES_CUISINE = 'New Haven-style pizza'

export const SITE_TITLE =
  'Alfi Pizza | New Haven-style pizza — Birdhaven, JHB & Sea Point, CPT'
export const SITE_DESCRIPTION =
  'Alfi Pizza serves New Haven-style pizza in Birdhaven, Johannesburg and Sea Point, Cape Town. Order online for either location.'

export const OG_IMAGE_PATH = '/og-image.jpg'
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_ALT = 'Alfi Pizza New Haven-style pizza'

export type LocationHours = {
  days: readonly string[]
  opens: string
  closes: string
}

export type RestaurantLocation = {
  id: string
  name: string
  city: string
  suburb: string
  streetAddress: string
  postalCode: string
  addressCountry: 'ZA'
  telephone: string
  email: string
  orderUrl: string
  hours: LocationHours
}

// Address, phone, email, and hours copied from the live location cards
// in src/components/Location.tsx. Do not invent extra fields here.
export const LOCATIONS: readonly RestaurantLocation[] = [
  {
    id: 'birdhaven',
    name: 'Alfi Pizza Birdhaven',
    city: 'Johannesburg',
    suburb: 'Birdhaven',
    streetAddress: '74 St Andrew Street',
    postalCode: '2192',
    addressCountry: 'ZA',
    telephone: '+27605083865',
    email: 'hellojhb@alfipizza.co.za',
    orderUrl: ORDER_URL,
    hours: {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '20:00',
    },
  },
  {
    id: 'seapoint',
    name: 'Alfi Pizza Sea Point',
    city: 'Cape Town',
    suburb: 'Sea Point',
    streetAddress: '158 Main Road',
    postalCode: '8005',
    addressCountry: 'ZA',
    telephone: '+27608278803',
    email: 'hellocpt@alfipizza.co.za',
    orderUrl: ORDER_URL_SEA_POINT,
    hours: {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '21:00',
    },
  },
]
