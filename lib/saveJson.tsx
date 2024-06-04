/* ----- Testcodes to save reponses of queries in JSON format --- */
// TODO: REMOVE THIS TESTCODE FILE WHEN RAISING PR

import fs from 'fs'
import path from 'path'
import axios from 'axios'

const projectRoot = process.cwd()
const testCodesFolderPath = path.join(projectRoot, 'test_codes')
const publicFolderPath = path.join(projectRoot, 'public')

export const checkTestCodesFolder = () => {
  if (!fs.existsSync(testCodesFolderPath)) {
    fs.mkdirSync(testCodesFolderPath)
  }
}

export const saveResultsJson = (fileName: string, response: any) => {
  const filePath = path.join(testCodesFolderPath, fileName)
  fs.writeFileSync(filePath, JSON.stringify({ response }, null, 2))
}

export const saveImage = async (imageUrl: string, fileName: string) => {
  const publicFilePath = path.join(publicFolderPath, fileName)

  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' })
    response.data.pipe(fs.createWriteStream(publicFilePath))
    console.log('Image saved successfully:', publicFilePath)
  } catch (error) {
    console.error('Error downloading image:', error)
  }
}
