import React from 'react'
import Layout from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import RecentPosts from './components/RecentPosts'
import Articles from './components/Articles'
import Faq from './components/Faq'

const Page = () => {
  return (
    <Layout>
      <Hero />
      <RecentPosts />
      <About />
      <Articles />
      <Faq />
    </Layout>
  )
}

export default Page
