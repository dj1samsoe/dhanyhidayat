/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'i.scdn.co', 'media.dev.to']
  },
  experimental: {
    serverComponents: true,
    serverActions: true
  }
};
module.exports = nextConfig;
