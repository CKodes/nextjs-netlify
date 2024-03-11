'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Card } from '@govtechsg/sgds-react/Card'

interface ResourcesCardProps {
  resourcesCardTitle: string
  resourcesCardDescription: string
  resourcesCardLink: string
}

export default function TopResourcesCard({
  resourcesCardTitle,
  resourcesCardDescription,
  resourcesCardLink,
}: ResourcesCardProps) {
  return (
    <>
      {/* Top Resources Card */}
      <Card>
        <Card.Img
          alt="img alternate text goes here"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          variant="top"
        />
        <Card.Body>
          <span>Tags</span>
          <h3>{resourcesCardTitle}</h3>
          <Card.Text>{resourcesCardDescription}</Card.Text>
          <Card.Link href={resourcesCardLink} target="_blank">
            Learn More
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}
