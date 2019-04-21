import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/EaUltimate/Hero'
import Features from '../components/EaUltimate/Features'
import Reviews from '../components/EaUltimate/Reviews'
import Pricing from '../components/EaUltimate/Pricing'

const IndexPage = () => (
  <Layout borderTop={false}>
    <Seo
      title="EA Ultimate"
      keywords={[`PHP`, `Inspection`, `PHP Inspections`, `EA Ultimate`]}
    />
    <Hero />
    <Features />
    <Reviews />
    <Pricing />
  </Layout>
)

export default IndexPage
