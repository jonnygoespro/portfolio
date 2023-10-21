'use client'

import { useEffect } from 'react'
import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Cv from '@/components/home/cv'
import Contact from '@/components/home/contact'
import { initHoverLinks } from '@/utils/links'

const Page = () => {
  useEffect(() => {
    initHoverLinks()
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
