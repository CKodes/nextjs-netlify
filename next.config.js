/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
}
