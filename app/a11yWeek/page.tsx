import Link from 'next/link'
import { getDatabase } from '../../lib/notion'
import styles from '../page.module.css'
import CardWithImg from '../../components/sgds/CardWithImg'
// import { checkTestCodesFolder, saveResultsJson } from '../../lib/saveJson'

async function getPosts() {
  const database = await getDatabase()

  const eventPagesData = database.filter((dBase: any) => {
    // Filters pages with tag main-event
    return dBase.properties.Tags.rich_text.some(
      (tag: any) => tag.plain_text === 'main-event'
    )
  })

  return { database, eventPagesData }
}

export async function generateStaticParams() {
  const { database } = await getPosts()
  return database.map((posts: any) => ({
    slug: posts.properties.Slug.rich_text[0].text.content,
  }))
}

export default async function A11yWeekPage({ params }: { params: any }) {
  // checkTestCodesFolder
  const { eventPagesData } = await getPosts()
  const { slug } = params

  // saveResultsJson('eventPagesData.json', eventPagesData)
  return (
    <>
      <main>
        <section className={styles.pageContentContainer}>
          <div>
            <h1 className="my-auto mx-0">A11y Week</h1>
          </div>
          {/* // TODO: Shift these two p into Notion */}
          <div className="my-5">
            <p>
              {`A11y Week is the week where Global Accessibility Awareness Day falls on. There are 11 characters between the 'A' and 'Y' in 'Accessibility', hence the name 'A11y'.`}
            </p>
          </div>
          <div className={styles.pageCardGrid}>
            {eventPagesData.map((post: any) => {
              const pageTitle = post.properties.Title.title[0].plain_text
              const slug = post.properties?.Slug?.rich_text[0].text.content
              const cardImgSrcUrl =
                post.properties?.CardImgSrc?.files[0].file.url
              // console.log(cardImgSrcUrl)
              return (
                <CardWithImg
                  key={post.id}
                  cardImgSrc={cardImgSrcUrl}
                  cardTitle={pageTitle}
                  cardCtaLink={`a11yWeek/${slug}`}
                  cardCta="Learn More"
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
