'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Button } from '@govtechsg/sgds-react/Button'
import { Card } from '@govtechsg/sgds-react/Card'
import styles from './landingPage.module.css'

export default function NewsContainer() {
  return (
    <>
      {/* News Section */}
      <section className={styles.newsCenterContainer}>
        <div className="d-flex justify-content-between">
          <h2 className="my-auto mx-0">News</h2>
          <Button className="d-none d-md-block">All Articles</Button>
        </div>
        <div className={styles.newsContent}>
          <Card className="border-0">
            <Card.Img
              alt="The team achieves a milestone"
              src="https://media.licdn.com/dms/image/D5622AQFBLH3JrI7vpA/feedshare-shrink_2048_1536/0/1709280485436?e=1712188800&v=beta&t=0W23TerMG7FntrF50ILpSoweX1JUmC5ZdLZR-l2ae28"
              variant="top"
            />
            <Card.Body>
              <span>Tags</span>
              <h3>Card Title</h3>
              <Card.Text>
                {`Some quick example text to build on the card title and make up
                the bulk of the card's content.`}
              </Card.Text>
              <a href="www.google.com">Read More</a>
            </Card.Body>
          </Card>
          <div className={styles.newsArchiveContainer}>
            <hr className="d-block d-md-none" />
            <div className={styles.newsArchiveSnippet}>
              <span>Tags</span>
              <h3>Some Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quod ipsa consequatur ratione nisi fuga quibusdam
                facere ullam dolores asperiores et voluptatibus dolore hic
                nesciunt sed, necessitatibus temporibus sapiente dolorum?
              </p>
              <a href="www.google.com">Read More</a>
            </div>
            <hr />
            <div className={styles.newsArchiveSnippet}>
              <span>Tags</span>
              <h3>Some Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quod ipsa consequatur ratione nisi fuga quibusdam
                facere ullam dolores asperiores et voluptatibus dolore hic
                nesciunt sed, necessitatibus temporibus sapiente dolorum?
              </p>
              <a href="www.google.com">Read More</a>
            </div>
          </div>
          <Button className="d-block d-md-none w-100">All Articles</Button>
        </div>
      </section>
    </>
  )
}
