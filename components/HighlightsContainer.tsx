'use client'
import '@govtechsg/sgds/css/sgds.css'
import HighlightsCard from './HighlightsCard'
import styles from './landingPage.module.css'

interface HighlightsContainerProps {
  cardTitleArray: string[]
  cardCtaArray: string[]
  cardLinkArray: string[]
}

export default function HighlightsContainer({
  cardTitleArray,
  cardCtaArray,
  cardLinkArray,
}: HighlightsContainerProps) {
  return (
    <>
      {/* Highlights Section */}
      <section className={styles.offset}>
        <div className={styles.heroCardsContainer}>
          <div className={styles.heroCards}>
            {cardTitleArray.slice(0, 4).map((title, index) => (
              <HighlightsCard
                key={index}
                cardTitle={title}
                cardCta={
                  cardCtaArray && index < cardCtaArray.length
                    ? cardCtaArray[index]
                    : ''
                }
                cardLink={
                  cardLinkArray && index < cardLinkArray.length
                    ? cardLinkArray[index]
                    : ''
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
