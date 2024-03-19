'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Card } from '@govtechsg/sgds-react/Card'
import Link from 'next/link'

interface Props {
  cardTitle: string
  cardLink: string
  cardImgSrc: string
}

export default function CardWithImg({
  cardTitle,
  cardLink,
  cardImgSrc,
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
          <Link href={cardLink} target="_blank" rel="noopener noreferrer">
            Read More
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
