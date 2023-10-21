'use client'

import { useEffect, useRef } from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  const circularText = useRef()

  useEffect(() => {
    circularText.current.innerHTML = 'Webdesign & Webdevelopment'.split('').map((char, i) => `<span style="transform: rotate(${i * 13.5}deg)">${char}</span>`).join('')
  }, [circularText])

  return (
    <section className={styles.hero}>
      <div className={styles.leftSide}>
        <div className={styles.caption} id='heroTrigger'>
          <p data-aos='fade-right' data-aos-delay='600' data-aos-duration='1200'>Realize your</p>
          <p data-aos='zoom-out' data-aos-delay='400' data-aos-duration='600'>Creative Ideas</p>
          <p data-aos='fade-left' data-aos-delay='600' data-aos-duration='1200'>with me</p>
          <div data-aos='zoom-in' data-aos-delay='600' data-aos-duration='1200' className={`${styles.backgroundText} backgroundText`}>
            <svg>
              <text>Creative Ideas</text>
              <text>Creative Ideas</text>
            </svg>
          </div>
        </div>

        <div className={styles.cta} data-aos='fade-right' data-aos-delay='1600' data-aos-duration='600'>
          <a href='#contact' className='hoverLink'>Contact me</a>
          <img src='/icons/arrowRight.svg' alt='Arrow' />
        </div>
      </div>

      <div className={styles.rightSide} data-aos='fade-left' data-aos-delay='400' data-aos-duration='600'>
        <div className={styles.image}>
          <div className={`${styles.circularText} ${styles.rotating}`}>
            <h1 className={styles.text} ref={circularText}>Webdesign & Webdevelopment</h1>
          </div>
          <div className={styles.imageHelper}>
            <img src='/images/hero.png' alt='' />
          </div>
        </div>
      </div>
      <div className={styles.ctaMobile} data-aos='fade-right' data-aos-delay='1600' data-aos-duration='600' data-aos-anchor='#heroTrigger'>
        <a href='#contact' className='hoverLink'>Contact me</a>
        <img src='/icons/arrowRight.svg' alt='Arrow' />
      </div>
    </section>
  )
}

export default Hero
