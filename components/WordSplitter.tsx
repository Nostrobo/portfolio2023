import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/WordSplitter.module.scss'
import gsapAnimation from '@/styles/animations.module';


const WordSplitter: React.FC<{ text: string, delay?: number }> = ({ text, delay }) => {

    const [displayLetter, setDisplayletter] = useState<string[]>([])
    const lettersRef: React.MutableRefObject<HTMLSpanElement[] | null[]> = useRef([])

   

    useEffect(() => {
        let letters = text.split('');
        letters.forEach((letter) => {

            if (letter === " ") {
                letter = '\xa0'
            } else {
                letter = `${letter}`
            }
            setDisplayletter(prev => [...prev, letter])
        })
    }, [])

    useEffect(() => {
        if (lettersRef.current) {
            gsapAnimation.wordSplitterAnimation(lettersRef.current, delay)
        }

    }, [displayLetter])

    return (
        <span className={styles.wordContainer}>
            {displayLetter.map((letter, idx) => (
                <span key={letter + idx} ref={el => lettersRef.current[idx] = el}>{letter}</span>
            ))}
        </span>
    )
}

export default WordSplitter
