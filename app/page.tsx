import Link from 'next/link'
import { getDatabase, getBlocks } from '../lib/notion'
import HeroContainer from '../components/Hero'
import HighlightsContainer from '../components/HighlightsContainer'
import NewsContainer from '../components/NewsContainer'
import ResourcesContainer from '../components/Resources'

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
  return { database, heroPageData }
}

export default async function LandingPage() {
  const { heroPageData } = await getPosts()
  const { heroPageId, heroTitle, heroCta } = heroPageData[0]
  const blocks = await getBlocks(heroPageId)
  const heroSubtitle = blocks[0].paragraph.rich_text[0].text.content
  const heroImage = blocks[1].image.file.url

  //Highlights
  const highlightsTitleArray: string[] = []
  const highlightsCtaArray: string[] = []
  const highlightsLinkArray: string[] = []

  const highlightsBlock = blocks.find((block: any) => {
    if (block.type === 'toggle') {
      return block.toggle.rich_text.some((richText: any) => {
        return richText.text.content === 'Highlights'
      })
    }
    return false
  })

  highlightsBlock.children.forEach((child: any) => {
    child.bulleted_list.children.forEach((listItem: any) => {
      const titleItem = listItem.bulleted_list_item.rich_text[0].text.content
      highlightsTitleArray.push(titleItem)

      const ctaItem =
        listItem.children[0].bulleted_list.children[0].bulleted_list_item
          .rich_text[0].text.content
      highlightsCtaArray.push(ctaItem)

      const linkItem = listItem.bulleted_list_item.rich_text[0].text.link.url
      highlightsLinkArray.push(linkItem)
    })
  })

  // Main News
  const mainNewsBlock = blocks.find((block: any) => {
    if (block.type === 'toggle') {
      return block.toggle.rich_text.some((richText: any) => {
        return richText.text.content === 'Main News'
      })
    }
    return false
  })

  const mainNewsTitle =
    mainNewsBlock.children[1].bulleted_list.children[0].bulleted_list_item
      .rich_text[0].text.content
  const mainNewsImageUrl = mainNewsBlock.children[0].image.file.url
  const mainNewsSnippet =
    mainNewsBlock.children[1].bulleted_list.children[0].children[0]
      .bulleted_list.children[0].bulleted_list_item.rich_text[0].text.content

  // Side News
  const sideNewsTitleArray: string[] = []
  const sideNewsSnippetArray: string[] = []

  const sideNewsBlock = blocks.find((block: any) => {
    if (block.type === 'toggle') {
      return block.toggle.rich_text.some((richText: any) => {
        return richText.text.content === 'Side News'
      })
    }
    return false
  })

  sideNewsBlock.children.forEach((child: any) => {
    child.bulleted_list.children.forEach((listItem: any) => {
      const titleItem = listItem.bulleted_list_item.rich_text[0].text.content
      sideNewsTitleArray.push(titleItem)

      const snippetItem =
        listItem.children[0].bulleted_list.children[0].bulleted_list_item
          .rich_text[0].text.content
      sideNewsSnippetArray.push(snippetItem)
    })
  })

  return (
    <>
      <main>
        <HeroContainer
          heroTitle={heroTitle}
          heroSubtitle={heroSubtitle}
          heroCta={heroCta}
          heroImage={heroImage}
        />
        <HighlightsContainer
          cardTitleArray={highlightsTitleArray}
          cardCtaArray={highlightsCtaArray}
          cardLinkArray={highlightsLinkArray}
        />
        <NewsContainer
          mainNewsTitle={mainNewsTitle}
          mainNewsLink={mainNewsImageUrl}
          mainNewsSnippet={mainNewsSnippet}
          sideNewsCardTitleArray={sideNewsTitleArray}
          sideNewsCardSnippetArray={sideNewsSnippetArray}
        />
        <ResourcesContainer />
      </main>
    </>
  )
}
