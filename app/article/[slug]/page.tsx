import { Metadata } from 'next'
import { Fragment } from 'react'
import { getPageFromSlug, getBlocks } from '../../../lib/notion'
import { renderBlock } from '../../../lib/renderer'
import styles from '../../page.module.css'

type Props = {
  params: { slug: string }
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
          <h1 className="mb-8 mx-0">{pageTitle}</h1>
        </div>
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </section>
    </main>
  )
}
