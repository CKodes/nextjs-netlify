import Link from 'next/link'
import { getDatabase } from '../../lib/notion'
import styles from '../page.module.css'
import CardWithImg from '../../components/sgds/CardWithImg'
import { checkTestCodesFolder, saveResultsJson } from '../../lib/saveJson'

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

export default async function A11yWeekPage() {
  checkTestCodesFolder
  const { eventPagesData } = await getPosts()

  saveResultsJson('eventPagesData.json', eventPagesData)
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
              A11y Week is an annual learning festival hosted by GovTech’s
              Accessibility Enabling Team that welcomes public officers involved
              in building digital government services, to come together to
              discuss and learn about digital accessibility and inclusive
              design.
            </p>
            <p>
              A11y Week also celebrates Global Accessibility Awareness Day — a
              global effort to get everyone talking, thinking and learning about
              digital access and inclusion, and we're pumped to celebrate it
              here in sunny Singapore.
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
                  cardLink={`a11yWeek/${slug}`}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
