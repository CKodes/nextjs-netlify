import { Metadata } from 'next'
import { getPageFromSlug } from '../../../lib/notion'
import { checkTestCodesFolder, saveResultsJson } from '../../../lib/saveJson'

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
  checkTestCodesFolder()

  const { page, pageTitle } = await getPageAndTitle(params.slug)

  if (!page) {
    return <div />
  }
  saveResultsJson('page.json', page)

  return (
    <main>
      <h1>{pageTitle}</h1>
    </main>
  )
}
