import Link from 'next/link'
import { getDatabase } from '../lib/notion'

async function getPosts() {
  const database = await getDatabase()

  const testingPageData = database.filter((dBase: any) => {
    // Filters pages with tag testing-page
    return dBase.properties.Tags.rich_text.some(
      (tag: any) => tag.plain_text === 'testing-page'
    )
  })

  return { database, testingPageData }
}

export default async function LandingPage() {
  const { testingPageData } = await getPosts()

  return (
    <>
      <main>
        <h1>Page Titles</h1>
        <ul>
          {testingPageData.map((post: any) => {
            const pageTitle = post.properties.Title.title[0].plain_text
            const slug = post.properties?.Slug?.rich_text[0].text.content
            return (
              <li key={post.id}>
                <Link
                  href={`/article/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{pageTitle}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
