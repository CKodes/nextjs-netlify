'use client'
import '@govtechsg/sgds/css/sgds.css'
import Link from 'next/link'
import { Button } from '@govtechsg/sgds-react/Button'
import styles from '../styles/landingPage.module.css'
import TopResourcesCard from './TopResourcesCard'

interface ResourceCardContainerProps {
  resourcesCardTitleArray: string[]
  resourcesCardDescriptionArray: string[]
  resourcesCardLinkArray: string[]
  ctaLink: string
}

export default function TopResourcesContainer({
  resourcesCardTitleArray,
  resourcesCardDescriptionArray,
  resourcesCardLinkArray,
  ctaLink,
}: ResourceCardContainerProps) {
  return (
    <>
      {/* Top Resources Container*/}
      <section className={styles.resourcesCenterContainer}>
        <div className="d-flex justify-content-between">
          <h2 className="my-auto mx-0">Top Resources</h2>
          <Button className="d-none d-md-block" href={ctaLink} target="_blank">
            All Resources
          </Button>
        </div>
        <div className={styles.resourcesContent}>
          {resourcesCardTitleArray.slice(0, 3).map((title, index) => (
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
          <Button
            className="d-block d-md-none w-100"
            href={ctaLink}
            target="_blank"
          >
            All Resources
          </Button>
        </div>
      </section>
    </>
  )
}
