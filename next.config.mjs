/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      // {
      //   source: "/login",
      //   destination: "/signin",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
