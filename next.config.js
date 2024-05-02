/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");
const CompressionPlugin = require("compression-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "swiperjs.com",
      "admin.mexpansion.webc.in",
      "api-mexpansion.webc.in",
      "admin.mexecution.com",
    ],
    formats: ["image/webp"],
  },
  Image: {
    minimumCacheTTL: 28800,
  },
  headers: async () => [
    {
      source: "/:all*(ico|jpg|jpeg|png|gif|svg|svgz|webp|avif|avifs|js|css|eot|ttf|otf|woff|woff2)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000",
        },
      ],
    },
  ],

  env: {
    MEXPANSION_BASE_URL: "https://admin.mexecution.com/api/",
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());

    return config;
  },
};

module.exports = withPlugins([withVideos], nextConfig);
