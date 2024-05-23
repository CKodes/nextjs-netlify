'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Card } from '@govtechsg/sgds-react/Card'
import Link from 'next/link'

interface Props {
  cardTitle: string
  cardCtaLink: string
  cardCta: string
}

export default function CardWithoutImg({
  cardTitle,
  cardCtaLink,
  cardCta,
}: Props) {
  return (
    <>
      <Card>
        <Card.Body>
          <span>Tags</span>
          <h3>{cardTitle}</h3>
          <Link href={cardCtaLink} target="_blank" rel="noopener noreferrer">
            {cardCta}
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
