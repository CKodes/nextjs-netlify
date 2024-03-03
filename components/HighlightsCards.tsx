'use client'
import '@govtechsg/sgds/css/sgds.css'
import Image from 'next/image'
import Tool from '../public/tool.svg'
import styles from './hero.module.css'

interface CardsProps {
  cardTitle: string
  cardDescription: string
}

export default function HighlightsCard({
  cardTitle,
  cardDescription,
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
          <a href="www.google.com">Read More</a>
        </div>
      </div>
    </>
  )
}
