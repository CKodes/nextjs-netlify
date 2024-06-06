'use client'
import '@govtechsg/sgds/css/sgds.css'
import { Button } from '@govtechsg/sgds-react/Button'
// import Image from 'next/image'
import styles from '../../styles/landingPage.module.css'
interface HeroContainerProps {
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  heroImage: any
}

export default function HeroContainer({
  heroTitle,
  heroSubtitle,
  heroCta,
  heroImage,
}: HeroContainerProps) {
  return (
    <section className={styles.heroBackground}>
      <div className={styles.centerContainer}>
        <div className={styles.heroContainer}>
          <div className="w-100">
            <div className={styles.heroContent}>
              <div className={styles.heroMessage}>
                <h1>{heroTitle}</h1>
                <p>{heroSubtitle}</p>
                <Button>{heroCta}</Button>
              </div>
              <div className="d-none d-sm-block">
                <img
                  src={heroImage}
                  alt="Hero Image"
                  width={300}
                  height={300}
                />
              </div>
              <div className="d-block d-sm-none">
                <img
                  src={heroImage}
                  alt="Hero Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
