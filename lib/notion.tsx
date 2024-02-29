/* ----- This file contains the Notion API usage --- */

import { Client } from '@notionhq/client'
import { checkTestCodesFolder, saveResultsJson } from './saveJson'

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
