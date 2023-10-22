'use client'

import { useEffect } from 'react'
import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Projects from '@/components/home/projects'
import Cv from '@/components/home/cv'
import Contact from '@/components/home/contact'
import { initHoverLinks } from '@/utils/links'
import { initAnimateOnScroll } from '@/utils/animateOnScroll'
import { initBackgroundTextSvgs } from '@/utils/backgroundTextSvgs'

const Page = () => {
  useEffect(() => {
    initAnimateOnScroll()
    initBackgroundTextSvgs()
    initHoverLinks()
  }, [])

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Cv />
      <Contact />
    </main>
  )
}

export default Page
