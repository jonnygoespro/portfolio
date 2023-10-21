'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './header.module.scss'

const Header = () => {
  const [isHeaderFullHeight, setIsHeaderFullHeight] = useState(false)
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsHeaderFullHeight(false)
      } else {
        setIsHeaderFullHeight(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isHeaderFullHeight ? styles.active : ''}`}>
      <Link href='/' className={styles.logo}>JonnyGoesPro</Link>
      <ul>
        <li>
          <Link href='#projects' className='hoverLink'>Projects</Link>
        </li>
        <li>
          <Link href='#cv' className='hoverLink'>CV</Link>
        </li>
        <li>
          <Link href='#contact' className='hoverLink'>Contact</Link>
        </li>
      </ul>
      <button className={`${styles.hamburger} ${styles['hamburger--spin']} ${isBurgerOpen ? styles['is-active'] : ''}`} type='button' onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']} />
        </span>
      </button>
    </header>
  )
}

export default Header
