import Link from 'next/link'
import { getDatabase } from '../../lib/notion'
import styles from '../page.module.css'
import CardWithoutImg from '../../components/sgds/CardWithoutImg'
import { checkTestCodesFolder, saveResultsJson } from '../../lib/saveJson'

async function getPosts() {
  const database = await getDatabase()

  const articlePagesData = database.filter((dBase: any) => {
    return dBase.properties.Tags.rich_text.some(
      (tag: any) => tag.plain_text === 'article'
    )
  })

  return { database, articlePagesData }
}

export default async function AllArticlesPage() {
  checkTestCodesFolder
  const { articlePagesData } = await getPosts()

  saveResultsJson('articlePagesData.json', articlePagesData)
  return (
    <>
      <main>
        <section className={styles.pageContentContainer}>
          <div>
            <h1 className="my-auto mx-0">All Articles</h1>
          </div>
          {/* // TODO: Shift this p into Notion */}
          <div className="my-5">
            <p>
              {`Wenn ich geh, sag mir wieso ist das ein Problem? Die Nachbarn fragen sich haben wir Essen oder Streit? Ich schreibe dir, um dreizehn Uhr. Du anwortest mir um siebzehn Uhr. Was hast du, in diesen 13 14 15 16 17, fünf Studen gemacht!`}
            </p>
          </div>
          <div className={styles.pageCardGrid}>
            {articlePagesData.map((post: any) => {
              const pageTitle = post.properties.Title.title[0].plain_text
              const slug = post.properties?.Slug?.rich_text[0].text.content

              return (
                <CardWithoutImg
                  key={post.id}
                  cardTitle={pageTitle}
                  cardCta="Read More"
                  cardCtaLink={`article/${slug}`}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
