/** @type {import('next').NextConfig} */

const nextConfig = {}

if (process.env.NODE_ENV === 'production') {
  nextConfig.env = {
    NOTION_TOKEN:
      process.env.NOTION_TOKEN ||
      require('dotenv').config().parsed?.NOTION_TOKEN,
    NOTION_DATABASE_ID:
      process.env.NOTION_DATABASE_ID ||
      require('dotenv').config().parsed?.NOTION_DATABASE_ID,
  }
  nextConfig.distDir = 'out'
  nextConfig.output = 'export'
  nextConfig.basePath = '/nextjs-netlify'
} else if (process.env.NODE_ENV === 'development') {
  nextConfig.images = {
    remotePatterns: [
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  }
}

module.exports = nextConfig
