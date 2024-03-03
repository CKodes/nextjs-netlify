'use client'
import '@govtechsg/sgds/css/sgds.css'
import HighlightsCard from './HighlightsCards'
import styles from './landingPage.module.css'

export default function HeroCardsContainer() {
  return (
    <>
      {/* Hero Cards Section */}
      <section className={styles.offset}>
        <div className={styles.heroCardsContainer}>
          <div className={styles.heroCards}>
            <HighlightsCard
              cardTitle="Title 1"
              cardDescription="oh captain my captain"
            />
            <HighlightsCard
              cardTitle="Title 2"
              cardDescription="oh captain my captain"
            />
            <HighlightsCard
              cardTitle="Title 3"
              cardDescription="oh captain my captain"
            />
            <HighlightsCard
              cardTitle="Title 4"
              cardDescription="oh captain my captain"
            />
          </div>
        </div>
      </section>
    </>
  )
}
