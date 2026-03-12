/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sandytaxi.com',
          },
        ],
        destination: 'https://sandytaxi.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

