import {
  LOCATIONS,
  OG_IMAGE_URL,
  SERVES_CUISINE,
  SITE_URL,
  type RestaurantLocation,
} from './site'

function restaurantNode(location: RestaurantLocation) {
  return {
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#${location.id}`,
    name: location.name,
    url: SITE_URL,
    image: OG_IMAGE_URL,
    servesCuisine: SERVES_CUISINE,
    telephone: location.telephone,
    email: location.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${location.streetAddress}, ${location.suburb}`,
      addressLocality: location.city,
      postalCode: location.postalCode,
      addressCountry: location.addressCountry,
    },
    openingHoursSpecification: location.hours.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...spec.days],
      opens: spec.opens,
      closes: spec.closes,
    })),
    potentialAction: {
      '@type': 'OrderAction',
      target: location.orderUrl,
    },
  }
}

export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@graph': LOCATIONS.map(restaurantNode),
}

export function restaurantJsonLdString(): string {
  return JSON.stringify(restaurantJsonLd)
}
