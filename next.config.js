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
  basePath: '/nextjs-netlify',
}
/*
let config = {}

if (process.argv.includes('build')) {
  // Configuration for npm run build
  config = {
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
    basePath: '/nextjs-netlify',
  }
} else {
  // Configuration for npm run dev
  config = {
    images: {
      remotePatterns: [
        {
          hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        },
      ],
    },
  }
}

module.exports = config
*/
