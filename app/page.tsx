import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
      </div>
    </>
  )
}

export default Page
