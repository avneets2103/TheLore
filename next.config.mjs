/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'api.microlink.io',
              pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            pathname: '/**',
          }
      ],
  },
};

export default nextConfig;
