'use client'
import '@govtechsg/sgds/css/sgds.css'
import styles from '../styles/landingPage.module.css'

interface SideNewsCardProps {
  sideNewsCardTitle: string
  sideNewsCardSnippet: string
}

export default function SideNewsCard({
  sideNewsCardTitle,
  sideNewsCardSnippet,
}: SideNewsCardProps) {
  return (
    <>
      {/* Side News Card */}
      <div className={styles.newsArchiveSnippet}>
        <span>Tags</span>
        <h3>{sideNewsCardTitle}</h3>
        <p>{sideNewsCardSnippet}</p>
        <a href="www.google.com">Read More</a>
      </div>
      <hr />
    </>
  )
}
