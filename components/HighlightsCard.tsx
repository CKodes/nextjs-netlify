'use client'
import '@govtechsg/sgds/css/sgds.css'
import Image from 'next/image'
import Tool from '../public/tool.svg'
import styles from './landingPage.module.css'

interface HighlightsCardProps {
  cardTitle: string
  cardCta: string
  cardLink: string
}

export default function HighlightsCard({
  cardTitle,
  cardCta,
  cardLink,
}: HighlightsCardProps) {
  return (
    <>
      {/* Highlights Card Component */}
      <div className={styles.heroCardItem}>
        <div className={styles.heroCardImage}>
          <Image src={Tool} alt="" width={150} height={150} priority />
        </div>
        <div className={styles.heroCardContent}>
          <h2>{cardTitle}</h2>
          <p>{cardCta}</p>
        </div>
        <div className="hero-card-footer">
          <a href={cardLink}>Read More</a>
        </div>
      </div>
    </>
  )
}
