/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'im.uniqlo.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
