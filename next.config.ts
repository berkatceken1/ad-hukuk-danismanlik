import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',  // Vercel için kapatıldı
  images: {
    // unoptimized: true,  // Vercel için kapatıldı
    formats: ['image/webp', 'image/avif'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 80, 96, 112, 128, 160, 192, 224, 256, 384, 420, 512],
  },
  trailingSlash: true,  // SEO için daha iyi
  // skipTrailingSlashRedirect: true,  // Vercel için gerekli değil

  // Performance optimizations
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/uzmanlik-alanlari',
        destination: '/uzmanlik',
        permanent: true,
      },
      {
        source: '/hizmetler',
        destination: '/uzmanlik',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
