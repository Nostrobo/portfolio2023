import React from 'react'
import styles from '@/styles/ExperienceArticle.module.scss'
import Image from 'next/image'
import WordSplitter from '@/components/WordSplitter'
import { useRef, useEffect } from 'react'
import gsapAnimation from '@/styles/animations.module'

const ExperienceArticle: React.FC<{ title: string, description: string, image: any, order?: "reverse" | undefined }> = ({ title, description, image, order }) => {
    let styleDirection = "row"
    if (order) {
        styleDirection = "row-reverse"
    }

    const imgExperienceRef = useRef(null)
    const descriptionExperienceRef = useRef(null)

    useEffect(() => {
        if (imgExperienceRef.current) {
            gsapAnimation.imageFadeIn(imgExperienceRef.current, imgExperienceRef.current )
        }
        if (descriptionExperienceRef.current && imgExperienceRef.current) {
            gsapAnimation.descriptionFadeIn(descriptionExperienceRef.current, imgExperienceRef.current)
        }
    }, [])
    return (
        <article className={styles.experienceContainer} style={{ flexDirection: styleDirection } as React.CSSProperties}>
            <div className="flex-d-column" >
                <h3>
                    <WordSplitter text={title} />
                </h3>
                <p ref={descriptionExperienceRef}>
                    {description}
                </p>
            </div>
            <Image src={image} alt="" ref={imgExperienceRef} />
        </article>
    )
}

export default ExperienceArticle
