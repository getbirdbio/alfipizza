/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Add static file serving configuration
  async headers() {
    return [
      {
        source: '/pizzas/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/jpeg',
          },
        ],
      },
      {
        source: '/sides/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/jpeg',
          },
        ],
      },
      {
        source: '/dips/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/jpeg',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig 