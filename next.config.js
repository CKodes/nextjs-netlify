/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    NOTION_TOKEN:
      process.env.NOTION_TOKEN ||
      require('dotenv').config().parsed?.NOTION_TOKEN,
    NOTION_DATABASE_ID:
      process.env.NOTION_DATABASE_ID ||
      require('dotenv').config().parsed?.NOTION_DATABASE_ID,
  },
  distDir: 'out',
  output: 'export',
  assetPrefix: '/nextjs-netlify',
  basePath: '/nextjs-netlify',
}
