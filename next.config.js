/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'i.scdn.co']
  },
  experimental: {
    serverComponents: true,
    serverActions: true
  }
};
module.exports = nextConfig;
