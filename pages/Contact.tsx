import React from 'react'
import styles from '@/styles/Contact.module.scss'
import { useState } from 'react'
import WordSplitter from '@/components/WordSplitter'
import ContactLinks from '@/components/ContactLinks'



export default function Contact() {

    let gsapAttr = { 'data-gsap': 'section' }

    const [mailerState, setMailerState] = useState<{ name: string, mail: string, phone?: string, message: string }>({
        name: '',
        mail: '',
        phone: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setMailerState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const sendMail = () => {
        console.log('sendmail')
    }
    return (
        <section id="contact" className={styles.contact} {...gsapAttr}>
            <div className={styles.contactLeft}>
                <form onSubmit={sendMail}>
                    <h3>Send me an email</h3>
                    <div className={styles.formInputContainer}>
                        <input
                            name="name"
                            type="text"
                            placeholder="What's your name?"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formInputContainer}>

                        <input
                            name="mail"
                            type="email"
                            placeholder="Your email?"
                            onChange={handleChange}
                            required
                        />

                    </div>
                    <div className={styles.formInputContainer}>

                        <input
                            name="phone"
                            type="text"
                            placeholder="Your phone number?"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formInputContainer}>
                        <textarea
                            name="message"
                            placeholder="And How can I help you?"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button>Let&apos;s talk</button>
                </form>
            </div>
            <div className={styles.contactRight}>
                <h2>
                    <WordSplitter text="Get in touch" />
                </h2>
                <p>
                    <WordSplitter text="Designed and Developped by"  />
                    <strong><WordSplitter text="Heddy AMARA" delay={1}/></strong>
                    <WordSplitter text=" amara.heddy.pro@gmail.com" delay={1.5} />
                </p>
                <ContactLinks />
            </div>
        </section>
    )
}
