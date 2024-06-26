import { Metadata } from 'next'
import { Fragment } from 'react'
import { getPageFromSlug, getBlocks, getDatabase } from '../../../lib/notion'
import { renderBlock } from '../../../lib/renderer'
import styles from '../../page.module.css'
import SideNavigation from '../../../components/sgds/SideNav'
import '@govtechsg/sgds/css/sgds.css'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const database = await getDatabase()
  const articleDatabase = database.filter((dBase: any) => {
    return dBase.properties.Tags.rich_text.some(
      (tag: any) => tag.plain_text === 'article'
    )
  })
  return articleDatabase.map((posts: any) => ({
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
  const { page, pageTitle } = await getPageAndTitle(params.slug)
  const blocks = await getBlocks(page?.id)

  if (!page || !blocks) {
    return <div />
  }

  return (
    <main>
      <section className={styles.pageContentContainer}>
        <div>
          <h1 className="mb-5 mx-0">{pageTitle}</h1>
        </div>
        {/* TOFIX: Article to be centered and sidenave left justified, aligned with h1 */}
        <div className="my-8 mx-0 justify-content-center row">
          <div className="d-none d-lg-block col-lg-2">
            <SideNavigation />
          </div>
          <div className="col-lg-7">
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
