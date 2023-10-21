'use client'

import { useEffect } from 'react'
import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Cv from '@/components/home/cv'
import Contact from '@/components/home/contact'
import { initHoverLinks } from '@/utils/links'
import { initAnimateOnScroll } from '@/utils/animateOnScroll'
import { initBackgroundTextSvgs } from '@/utils/backgroundTextSvgs'

const Page = () => {
  useEffect(() => {
    initHoverLinks()
    initAnimateOnScroll()
    initBackgroundTextSvgs()
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Cv />
      <Contact />
    </main>
  )
}

export default Page
