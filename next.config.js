/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = {
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN || require('dotenv').config().parsed?.NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID || require('dotenv').config().parsed?.NOTION_DATABASE_ID,
  },
  nextConfig,
  images: {
    remotePatterns: [
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
}
