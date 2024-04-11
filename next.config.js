/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nextjs-netlify',
  output: 'export', // <=== enables static exports
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
}
