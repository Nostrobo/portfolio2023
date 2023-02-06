import React from 'react'
import styles from '@/styles/StackBar.module.scss'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsapAnimation from '@/styles/animations.module'

gsap.registerPlugin(ScrollTrigger)



const StackBar: React.FC<{ title: string, level: number }> = ({ title, level }) => {


  const fillerBarRef = useRef(null)
  const levelBarRef = useRef(null)

  useEffect(() => {

    if (fillerBarRef.current) {
      gsapAnimation.stackBarFillerAnimation(fillerBarRef.current, level)
    }
  }, [])


  useEffect(() => {
    if (levelBarRef.current) {
      gsapAnimation.levelBarAnimation(levelBarRef.current)
    }
  }, [])
  return (
    <div className={styles.levelBarContainer} ref={levelBarRef}>
      <p>{title}</p>
      <div className={styles.levelBar} >
        <div className={styles.fillerBar} ref={fillerBarRef}></div>
      </div>
    </div>
  )
}

export default StackBar;
