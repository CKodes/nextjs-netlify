/* ----- This file contains the Notion API usage --- */

import { Client } from '@notionhq/client'
import { checkTestCodesFolder, saveResultsJson, saveImage } from './saveJson'

checkTestCodesFolder()

const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId as any,
  })
  return response.results
}

export const getPageFromSlug = async (slug: any) => {
  const response = await notion.databases.query({
    database_id: databaseId as any,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
  if (response?.results?.length) {
    return response?.results?.[0]
  }
  return {}
}

export const getBlocks = async (blockID: any): Promise<any[]> => {
  const blockId = blockID.replaceAll('-', '')

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  })

  const childBlocks = results.map(async (block: any) => {
    if (block.has_children) {
      const children = await getBlocks(block.id)
      return { ...block, children }
    }
    return block
  })

  return Promise.all(childBlocks).then(async (blocks) => {
    const acc = blocks.reduce((acc, curr) => {
      if (curr.type === 'bulleted_list_item') {
        if (acc[acc.length - 1]?.type === 'bulleted_list') {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr)
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: 'bulleted_list',
            bulleted_list: { children: [curr] },
          })
        }
      } else if (curr.type === 'numbered_list_item') {
        if (acc[acc.length - 1]?.type === 'numbered_list') {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr)
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: 'numbered_list',
            numbered_list: { children: [curr] },
          })
        }
      } else {
        acc.push(curr)
      }
      return acc
    }, [])

    acc.forEach(async (obj: any, i: any) => {
      if (obj.type === 'image' && obj.image?.file?.url) {
        saveImage(`image${i}.png`, obj.image.file.url)
        obj.image.file.url = `/nextjs-netlify/image${i}.png`
      }
    })

    saveResultsJson('acc', acc)
    return acc
  })
}

function getRandomInt(minimum: number, maximum: number) {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
