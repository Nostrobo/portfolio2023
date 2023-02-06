import React from 'react'
import styles from '@/styles/Work.module.scss'
import StackBar from '../components/StackBar'
import ExperienceArticle from '../components/ExperienceArticle'
import WordSplitter from '@/components/WordSplitter'
import jamespotImg from '../pages/assets/jamespot.jpg'
import CHImg from '../pages/assets/celebrityHunted.jpg'
import CBImg from '../pages/assets/CodebookIcon.svg'



export default function Work() {

  let gsapAttr = { 'data-gsap': 'section' }

  return (
    <section id="work" className={styles.work} {...gsapAttr} >
      <div className={styles.workContainer}>
        <div className={styles.workRight}>
          <h2>
            <WordSplitter text="Work" />
          </h2>
          <h3>
          <WordSplitter text="My stack" delay={.2}/>
          </h3>
          <StackBar title="React" level={90} />
          <StackBar title="AngularJS" level={60} />
          <StackBar title="TypeScript" level={60} />
          <StackBar title="Javascript" level={90} />
          <StackBar title="CSS" level={90} />
        </div>
        <div className={styles.experiencesContainer}>
          <ExperienceArticle title={"Jamespot"} description={`Jamespot is a SAAS software designed to improve communication, productivity, and collaboration. Within the technical team, I was able to: \n
          Improve the product by developing new features/applications.\n
          Conduct unit tests (front and back).\n
          Fix bugs.\n
          Contribute to writing documentation.
          `} image={jamespotImg} />
          <ExperienceArticle title={"Endemol"} description={'As part of the "Celebrity Hunted" show, I created a website for the participants. I was responsible for the entire design and development. Several features were part of the project such as a custom audio player with a spectrum visualizer, countdown timers, and a map display system based on the day.'} 
          order={"reverse"} image={CHImg} />
          <ExperienceArticle title={`Alpha \n Tabula`} description={'The application developed by Alpha Tabula is a project management tool for the audiovisual industry. In this role, I was able to improve the user experience by creating or improving new features, fixing bugs, and enhancing the design. I also improved the quality of the code through refactoring and optimization.'} 
          image={CBImg}/>
        </div>
      </div>
    </section>
  )
}
