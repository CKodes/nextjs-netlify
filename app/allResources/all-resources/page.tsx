import { getDatabase, getBlocks } from '@/lib/notion'
import AllResourcesContainer from '@/components/AllResources'
import '@govtechsg/sgds/css/sgds.css'

async function getPosts() {
  const database = await getDatabase()
  const resourcesPageData = database
    .filter((dBase: any) => {
      return dBase.properties.Tags.rich_text.some(
        (tag: any) => tag.plain_text === 'resources-tag'
      )
    })
    .map((dBase: any) => {
      return {
        resourcesPageId: dBase.id,
      }
    })
  return { database, resourcesPageData }
}

export default async function ResourcesPage() {
  const { resourcesPageData } = await getPosts()
  const { resourcesPageId } = resourcesPageData[0]

  const blocks = await getBlocks(resourcesPageId)

  // Resources
  const allResourcesBlock = blocks.find((block: any) => {
    if (block.type === 'toggle') {
      return block.toggle.rich_text.some((richText: any) => {
        return richText.text.content === 'Resources'
      })
    }
    return false
  })

  const allResourcesCardTitleArray: string[] = []
  const allResourcesCardDescriptionArray: string[] = []
  const allResourcesCardLinkArray: string[] = []

  allResourcesBlock.children.forEach((child: any) => {
    child.bulleted_list.children.forEach((listItem: any) => {
      const titleItem = listItem.bulleted_list_item.rich_text[0].text.content
      allResourcesCardTitleArray.push(titleItem)

      const descItem =
        listItem.children[0].bulleted_list.children[0].bulleted_list_item
          .rich_text[0].text.content
      allResourcesCardDescriptionArray.push(descItem)

      const urlItem = listItem.bulleted_list_item.rich_text[0].text.link.url
      allResourcesCardLinkArray.push(urlItem)
    })
  })

  // console.log(allResourcesCardLinkArray)

  return (
    <>
      <main>
        <AllResourcesContainer
          resourcesCardTitleArray={allResourcesCardTitleArray}
          resourcesCardDescriptionArray={allResourcesCardDescriptionArray}
          resourcesCardLinkArray={allResourcesCardLinkArray}
        />
      </main>
    </>
  )
}
