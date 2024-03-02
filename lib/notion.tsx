/* ----- This file contains the Notion API usage --- */

// TODO: REMOVE THESE TESTCODES WHEN RAISING PR
import { checkTestCodesFolder, saveResultsJson } from './saveJson'

import { Client } from '@notionhq/client'

const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getDatabase = async () => {
  checkTestCodesFolder()
  const response = await notion.databases.query({
    database_id: databaseId as any,
  })
  saveResultsJson('getDatabase.json', response.results)
  return response.results
}

export const getPageFromSlug = async (slug: any) => {
  checkTestCodesFolder()
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
    saveResultsJson('getPageFromSlug.json', response)
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

  return Promise.all(childBlocks).then((blocks) =>
    blocks.reduce((acc, curr) => {
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
  )
}

function getRandomInt(minimum: number, maximum: number) {
  const min = Math.ceil(minimum)
  const max = Math.floor(maximum)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
