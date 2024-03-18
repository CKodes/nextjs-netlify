'use client'
import '@govtechsg/sgds/css/sgds.css'
import styles from '../styles/landingPage.module.css'
import TopResourcesCard from './LandingPage/TopResourcesCard'

interface ResourceCardsContainerProps {
  resourcesCardTitleArray: string[]
  resourcesCardDescriptionArray: string[]
  resourcesCardLinkArray: string[]
}

export default function AllResourcesContainer({
  resourcesCardTitleArray,
  resourcesCardDescriptionArray,
  resourcesCardLinkArray,
}: ResourceCardsContainerProps) {
  return (
    <>
      {/* All Resources */}
      <section className={styles.resourcesCenterContainer}>
        <div className="d-flex justify-content-between">
          <h1 className="my-auto mx-0">All Resources</h1>
        </div>
        <div className={styles.resourcesContent}>
          {resourcesCardTitleArray.map((title, index) => (
            <TopResourcesCard
              key={index}
              resourcesCardTitle={title}
              resourcesCardDescription={
                resourcesCardDescriptionArray &&
                index < resourcesCardDescriptionArray.length
                  ? resourcesCardDescriptionArray[index]
                  : ''
              }
              resourcesCardLink={
                resourcesCardLinkArray && index < resourcesCardLinkArray.length
                  ? resourcesCardLinkArray[index]
                  : ''
              }
            />
          ))}
        </div>
      </section>
    </>
  )
}
