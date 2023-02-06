import React from 'react'
import styles from '@/styles/About.module.scss'
import Image from 'next/image'
import guitarImg from './assets/Guitar.png'
import videoGamesImg from './assets/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg'
import devImg from './assets/dev.png'
import { useState, useRef, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import WordSplitter from '@/components/WordSplitter'
import gsapAnimation from '@/styles/animations.module'


export default function About() {

    let gsapAttr = { 'data-gsap': 'section' }

    const categorieInfoDatas = [
        {
            type: 'web',
            title: "Web development",
            img: devImg,
            description: `I love coding since the first time I've written my first line of code! I am like to incorporate my creative abilities into my projects, constantly learning with new tools and techniques.`
        },
        {
            type: 'music',
            title: "Music",
            img: guitarImg,
            description: `I'm passionate about music, I play guitar since I'm 14. I've played in bands, did many gigs, realese few CDs and music video.`
        },
        {
            type: 'videoGames',
            title: "Video games",
            img: videoGamesImg,
            description: `I play video games since I'm a kid, that's my madeleine de proust. `
        }
    ]

    const [categorieInfo, setCategorieInfo] = useState<{
        type: string,
        title: string,
        img: StaticImageData,
        description: string
    }>(categorieInfoDatas[0])

    const displayInfoTitleRef = useRef(null)
    const displayInfoImgRef = useRef(null)
    const displayInfodescriptionRef = useRef(null)
    const categoriesInfoDisplay = useRef(null)

    useEffect(()=>{
        if (categoriesInfoDisplay.current) {
            gsapAnimation.categoriesInfoAnimation(categoriesInfoDisplay.current)
        }
    },[])

    if (displayInfoTitleRef.current) {
        gsapAnimation.aboutdisplayAnimation(displayInfoTitleRef.current,0)
    }
    if (displayInfoImgRef.current) {
        gsapAnimation.aboutdisplayAnimation(displayInfoImgRef.current, .1)
    }
    if (displayInfodescriptionRef.current) {
        gsapAnimation.aboutdisplayAnimation(displayInfodescriptionRef.current, .2)
    }

    useEffect(() => {
        setDefaultCategory()
    }, [])

    const setDefaultCategory = () => {
        setCategorieInfo(categorieInfoDatas[0])

        let elems = document.getElementsByClassName(styles.categorieSelector)
        let selectors = [...elems]

        selectors[0].classList.add(styles.active)
    }


    const selectCategorie = (e: React.MouseEvent, type: string) => {
        //remove all the active classes
        let elems = document.getElementsByClassName(styles.active)
        let actives = [...elems] // needs to be copied
        actives.forEach(active => {
            active.classList.remove(styles.active)
        });
        // add active to the good selector
        (e.target as Element).classList.add(styles.active)


        //set the info in the display
        categorieInfoDatas.forEach((categorieInfo) => {
            if (type === categorieInfo.type) {
                setCategorieInfo(categorieInfo)
            }
        })
    }

    return (
        <section id="about" className={styles.about} {...gsapAttr}>
            <h2>
                <WordSplitter text='About' />
                <WordSplitter text='me' delay={.3} />
            </h2>
            <div className={styles.categoriesInfoContainer}>
                <div className={styles.categorieInfoSelectors}>
                    <ul>
                        {categorieInfoDatas.map((categorieInfo, idx) => (
                            <li className={styles.categorieSelector} onMouseEnter={(e) => selectCategorie(e, categorieInfo.type)} key={categorieInfo.title}>{categorieInfo.title}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.categoriesInfoDisplay} ref={categoriesInfoDisplay}>
                    <h3 className={styles.displayInfoLeft} ref={displayInfoTitleRef}>{categorieInfo?.title}</h3>
                    <div className={styles.displayInfoRight} >
                        <Image src={categorieInfo.img} alt="" ref={displayInfoImgRef}/>
                        <p ref={displayInfodescriptionRef}>
                            {categorieInfo?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
