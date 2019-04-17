import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Index/Hero'
import Features from '../components/Index/Features'
import Reviews from '../components/Index/Reviews'
import Pricing from '../components/Index/Pricing'

const IndexPage = () => (
  <Layout>
    <Seo title="" keywords={[`PHP`, `Inspection`, `PHP Inspections`, `EA Ultimate`]} />
    <Hero />
    <Features />
    <Reviews />
    <Pricing />
  </Layout>
)

export default IndexPage
