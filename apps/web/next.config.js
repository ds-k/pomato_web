/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/account/:path*",
        destination: "http://localhost:5173/account/:path*",
      },
    ];
  },
};

export default nextConfig;
