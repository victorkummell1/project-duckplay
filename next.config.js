/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/[a-zA-Z0-9]+.png',
      },
    ],
  },
}

module.exports = nextConfig
