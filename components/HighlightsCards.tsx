'use client'
import '@govtechsg/sgds/css/sgds.css'
import Image from 'next/image'
import Tool from '../public/tool.svg'
import styles from './landingPage.module.css'

interface CardsProps {
  cardTitle: string
  cardDescription: string
  cardUrl: string
}

export default function HighlightsCard({
  cardTitle,
  cardDescription,
  cardUrl,
}: CardsProps) {
  return (
    <>
      {/* Highlights Cards Section */}
      <div className={styles.heroCardItem}>
        <div className={styles.heroCardImage}>
          <Image src={Tool} alt="" width={150} height={150} priority />
        </div>
        <div className={styles.heroCardContent}>
          <h2>{cardTitle}</h2>
          <p>{cardDescription}</p>
        </div>
        <div className="hero-card-footer">
          <a href={cardUrl}>Read More</a>
        </div>
      </div>
    </>
  )
}
