'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Card } from '@govtechsg/sgds-react/Card'
import Link from 'next/link'

interface Props {
  cardTitle: string
  cardLink: string
}

export default function CardWithoutImg({ cardTitle, cardLink }: Props) {
  return (
    <>
      <Card>
        <Card.Body>
          <span>Tags</span>
          <h3>{cardTitle}</h3>
          <Link href={cardLink} target="_blank" rel="noopener noreferrer">
            Learn More
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
