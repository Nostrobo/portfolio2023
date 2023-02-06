import React from 'react'
import styles from '@/styles/Header.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react'
import gsapAnimation from '@/styles/animations.module'
import Link from 'next/link'

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      gsapAnimation.headerAnimation(headerRef.current)
    }
  })
  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerName}>
        <h1>Heddy Amara</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navul}>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
      
        </ul>
      </nav>
    </header>
  )
}
