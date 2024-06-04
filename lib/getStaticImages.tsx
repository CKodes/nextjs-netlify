import { getDatabase, getBlocks } from '../lib/notion'
import {
  saveImage,
  checkTestCodesFolder,
  saveResultsJson,
} from '@/lib/saveJson'

checkTestCodesFolder()

async function getPosts() {
  const database = await getDatabase()
  const heroPageData = database
    .filter((dBase: any) => {
      return dBase.properties.Tags.rich_text.some(
        (tag: any) => tag.plain_text === 'landing-page'
      )
    })
    .map((dBase: any) => {
      return {
        heroPageId: dBase.id,
        heroTitle: dBase.properties.Title.title[0].text.content,
        heroCta: dBase.properties.CTA.rich_text[0].plain_text,
      }
    })
  saveResultsJson('heroPageData', heroPageData)
  saveResultsJson('database', database)
  return { database, heroPageData }
}

export default async function LandingPage() {
  const { heroPageData } = await getPosts()
  const { heroPageId } = heroPageData[0]
  const blocks = await getBlocks(heroPageId)
  saveResultsJson('blocks', blocks)

  function getImageUrls(data: any, urls: any = []) {
    for (const item of data) {
      if (item.image && item.image.file && item.image.file.url) {
        urls.push(item.image.file.url)
      }
      if (item.children) {
        getImageUrls(item.children, urls)
      }
      if (item.bulleted_list && item.bulleted_list.children) {
        getImageUrls(item.bulleted_list.children, urls)
      }
    }
    return urls
  }

  const imageUrls = getImageUrls(blocks)

  function dwldImage() {
    for (let i = 0; i < imageUrls.length; i++) {
      saveImage(imageUrls[i], `image${i}.png`)
    }
  }
  dwldImage()
  console.log(imageUrls.length)
}
