import React from 'react'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import guitarImg from './assets/dev.png'
import WordSplitter from '@/components/WordSplitter'
import { useRef, useEffect } from 'react'
import gsapAnimation from '@/styles/animations.module'


export default function Home() {

    let gsapAttr = { 'data-gsap': 'section' }

    const heroImgRef = useRef(null)

    useEffect(()=>{
        if(heroImgRef.current){
            gsapAnimation.imageHeroFadeIn(heroImgRef.current)
        }
    },[])

    return (
        <section id="home" className={styles.home}  {...gsapAttr}>
            <div className={styles.emptyFlex}></div>
            <div className={styles.homeMain}>
                <div className={styles.homeLeft}>
                    <div className={styles.content}>
                        <p>
                            <WordSplitter text="French based"  />
                        </p>
                        <h2>
                            <WordSplitter text="CREATIVE" />

                            <WordSplitter text="DEVELOPER" />
                        </h2>
                        <p>
                            <WordSplitter text="Portfolio 2023" delay={.5} />
                        </p>
                    </div>
                </div>
                <div className={styles.homeRight}>
                    <div>
                        <div className={styles.emptyFlex}></div>
                        <div className={styles.imgContainer}>
                            <Image src={guitarImg} alt="" ref={heroImgRef}/>
                        </div>
                        <p>
                            <WordSplitter text="Glad to see you" delay={1} />
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.homeFooter}>Scrool Down</div>
        </section>
    )
}
