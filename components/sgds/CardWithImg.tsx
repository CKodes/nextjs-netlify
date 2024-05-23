'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Card } from '@govtechsg/sgds-react/Card'
import Link from 'next/link'

interface Props {
  cardTitle: string
  cardCtaLink: string
  cardImgSrc: string
  cardCta: string
}

export default function CardWithImg({
  cardTitle,
  cardCtaLink,
  cardImgSrc,
  cardCta,
}: Props) {
  return (
    <>
      <Card>
        <Card.Img
          alt="img alternate text goes here"
          src={cardImgSrc}
          variant="top"
        />
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
