import { Metadata } from 'next'
import { Fragment } from 'react'
import { getPageFromSlug, getBlocks, getDatabase } from '../../../lib/notion'
import { renderBlock } from '../../../lib/renderer'
// import { checkTestCodesFolder, saveResultsJson } from '../../../lib/saveJson'
import styles from '../../page.module.css'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const database = await getDatabase()
  const a11yWeekDatabase = database.filter((dBase: any) => {
    return dBase.properties.Tags.rich_text.some(
      (tag: any) => tag.plain_text === 'main-event'
    )
  })
  return a11yWeekDatabase.map((posts: any) => ({
    slug: posts.properties.Slug.rich_text[0].text.content,
  }))
}

async function getPageAndTitle(
  slug: string
): Promise<{ page: any; pageTitle: string }> {
  const page: any = await getPageFromSlug(slug)
  const pageTitle: string = page.properties.Title.title[0].plain_text
  return { page, pageTitle }
}
// Dynamically update title for each page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageTitle } = await getPageAndTitle(params.slug)

  return {
    title: pageTitle,
  }
}

export default async function Page({ params }: { params: any }) {
  // checkTestCodesFolder
  const { page, pageTitle } = await getPageAndTitle(params.slug)
  const blocks = await getBlocks(page?.id)

  if (!page || !blocks) {
    return <div />
  }
  // saveResultsJson('blocks.json', blocks)

  return (
    <main>
      <section className={styles.pageContentContainer}>
        <h1>{pageTitle}</h1>
        <div className="mt-5">
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}
