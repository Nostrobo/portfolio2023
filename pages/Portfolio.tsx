import React, { useEffect } from 'react'
import styles from '@/styles/Portfolio.module.scss'
import { useRef } from 'react'
import Header from './Header'
import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import gsapAnimations from "../styles/animations.module"

const Portfolio = () => {
  const appContainerRef = useRef(null)

  useEffect(() => {
    if (appContainerRef.current) {
      gsapAnimations.backgroundAnimation(appContainerRef.current)
    }
  }, [])

  return (
    <div className={styles.porfolioContainer} ref={appContainerRef}>
      <Header />
      <main>
        <Home />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default Portfolio
