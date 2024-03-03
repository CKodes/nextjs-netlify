'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Button } from '@govtechsg/sgds-react/Button'
import { Card } from '@govtechsg/sgds-react/Card'
import styles from './landingpage.module.css'

export default function ResourcesContainer() {
  return (
    <>
      {/* Top Resources */}
      <section className={styles.resourcesCenterContainer}>
        <div className="d-flex justify-content-between">
          <h2 className="my-auto mx-0">Top Resources</h2>
          <Button className="d-none d-md-block">All Resources</Button>
        </div>
        <div className={styles.resourcesContent}>
          <Card>
            <Card.Img
              alt="img alternate text goes here"
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              variant="top"
            />
            <Card.Body>
              <span>Tags</span>
              <h3>Card Title</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Go somewhere</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              alt="img alternate text goes here"
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              variant="top"
            />
            <Card.Body>
              <span>Tags</span>
              <h3>Card Title</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Go somewhere</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              alt="img alternate text goes here"
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              variant="top"
            />
            <Card.Body>
              <span>Tags</span>
              <h3>Card Title</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Go somewhere</Card.Link>
            </Card.Body>
          </Card>
          <Button className="d-block d-md-none w-100">All Resources</Button>
        </div>
      </section>
    </>
  )
}
