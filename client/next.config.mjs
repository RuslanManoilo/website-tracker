/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8008/:path*",
      }
    ]
  }
};

export default nextConfig;
