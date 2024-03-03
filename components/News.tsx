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
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJlc2VudGF0aW9ufGVufDB8fDB8fHww"
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
