import { getDatabase } from '../lib/notion'

async function getPosts() {
  const database = await getDatabase()

  return database
}

export default async function LandingPage() {
  const posts: any = await getPosts()

  return (
    <>
      <main>
        <h1>Page Titles</h1>
        <ul>
          {posts.map((post: any) => {
            const pageTitle = post.properties.Title.title[0].plain_text
            return (
              <li key={post.id}>
                <h2>{pageTitle}</h2>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
