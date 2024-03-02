/* ----- Testcodes to save reponses of queries in JSON format --- */
// TODO: REMOVE THIS TESTCODE FILE WHEN RAISING PR

import fs from 'fs'
import path from 'path'

const projectRoot = process.cwd()
const testCodesFolderPath = path.join(projectRoot, 'test_codes')

export const checkTestCodesFolder = () => {
  if (!fs.existsSync(testCodesFolderPath)) {
    fs.mkdirSync(testCodesFolderPath)
  }
}

export const saveResultsJson = (fileName: string, response: any) => {
  const filePath = path.join(testCodesFolderPath, fileName)
  fs.writeFileSync(filePath, JSON.stringify({ response }, null, 2))
}
