/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com']
  }
};
module.exports = nextConfig;

const withGA = require('@bradgarropy/next-google-analytics');

module.exports = withGA({
  googleAnalytics: {
    id: 'G-20W6BJQQVJ' // Ganti dengan kode pelacakan Anda
  }
});
