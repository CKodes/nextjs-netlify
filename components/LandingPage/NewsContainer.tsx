'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Button } from '@govtechsg/sgds-react/Button'
import { Card } from '@govtechsg/sgds-react/Card'
import styles from '../../styles/landingPage.module.css'
import SideNewsCard from './SideNewsCard'

interface NewsContainerProps {
  mainNewsTitle: string
  mainNewsLink: string
  mainNewsSnippet: string
  sideNewsCardTitleArray: string[]
  sideNewsCardSnippetArray: string[]
  allArticlesBtnUrl: string
}

export default function NewsContainer({
  mainNewsTitle,
  mainNewsLink,
  mainNewsSnippet,
  sideNewsCardTitleArray,
  sideNewsCardSnippetArray,
  allArticlesBtnUrl,
}: NewsContainerProps) {
  return (
    <>
      {/* News Section */}
      <section className={styles.newsCenterContainer}>
        <div className="d-flex justify-content-between">
          <h2 className="my-auto mx-0">News</h2>
          {/* // TODO: Change to a styled link. */}
          <Button
            href={allArticlesBtnUrl}
            target="_blank"
            className="d-none d-md-block"
          >
            All Articles
          </Button>
        </div>
        <div className={styles.newsContent}>
          <Card className="border-0">
            <Card.Img
              alt="The team achieves a milestone"
              src={mainNewsLink}
              variant="top"
            />
            <Card.Body>
              <span>Tags</span>
              <h3>{mainNewsTitle}</h3>
              <Card.Text>{mainNewsSnippet}</Card.Text>
              <a href="www.google.com">Read More</a>
            </Card.Body>
          </Card>
          <div className={styles.newsArchiveContainer}>
            <hr className="d-block d-md-none" />
            {sideNewsCardTitleArray.slice(0, 2).map((title, index) => (
              <SideNewsCard
                key={index}
                sideNewsCardTitle={title}
                sideNewsCardSnippet={
                  sideNewsCardSnippetArray &&
                  index < sideNewsCardSnippetArray.length
                    ? sideNewsCardSnippetArray[index]
                    : ''
                }
              />
            ))}
          </div>
          {/* // TODO: Change to a styled link. */}
          <Button
            href={allArticlesBtnUrl}
            target="_blank"
            className="d-block d-md-none w-100"
          >
            All Articles
          </Button>
        </div>
      </section>
    </>
  )
}
