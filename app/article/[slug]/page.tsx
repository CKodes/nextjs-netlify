import Head from 'next/head'
import { getDatabase, getPageFromSlug } from '../../../lib/notion'

export async function generateStaticParams() {
  const database = await getDatabase()
  return database?.map((page: any) => {
    const slug = page.properties.Slug.rich_text[0].plain_text
    return { id: page.id, slug }
  })
}

export default async function Page({ params }: { params: any }) {
  const page: any = await getPageFromSlug(params?.slug)
  const pageTitle: string = page.properties.Title.title[0].plain_text

  if (!page) {
    return <div />
  }

  return (
    <div>
      <Head>
        {/* 
        // FIXME: Dynamic title not reflecting on layout.tsx
        */}
        <title>{pageTitle}</title>
      </Head>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </div>
  )
}
