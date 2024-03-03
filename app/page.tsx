import Link from 'next/link'
import { getDatabase, getBlocks } from '../lib/notion'
import HeroContainer from '../components/Hero'
import HeroCardsContainer from '../components/HeroCards'
import NewsContainer from '../components/News'
import ResourcesContainer from '../components/Resources'

async function getPosts() {
  const database = await getDatabase()
  const heroPageData = database
    .filter((dBase: any) => {
      return dBase.properties.Tags.rich_text.some(
        (tag: any) => tag.plain_text === 'hero'
      )
    })
    .map((dBase: any) => {
      return {
        heroPageId: dBase.id,
        heroTitle: dBase.properties.Title.title[0].text.content,
        heroCta: dBase.properties.CTA.rich_text[0].plain_text,
      }
    })
  return { database, heroPageData }
}

export default async function LandingPage() {
  const { heroPageData } = await getPosts()
  const { heroPageId, heroTitle, heroCta } = heroPageData[0]
  const blocks = await getBlocks(heroPageId)
  const heroSubtitle = blocks[0].paragraph.rich_text[0].text.content
  const heroImage = blocks[1].image.file.url

  return (
    <>
      <main>
        <HeroContainer
          heroTitle={heroTitle}
          heroSubtitle={heroSubtitle}
          heroCta={heroCta}
          heroImage={heroImage}
        />
        <HeroCardsContainer />
        <NewsContainer />
        <ResourcesContainer />
      </main>
    </>
  )
}
