/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
