import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  // حل مشکل تصاویر در حالت استاتیک
  images: {
    unoptimized: true,
  },
  output: "export",
  // هر مسیر = پوشه/index.html — بدون تداخل services.html با پوشه services/ روی Apache
  trailingSlash: true,
};

export default nextConfig;
