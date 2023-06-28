/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
