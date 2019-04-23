import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/ea-ultimate/Hero'
import Features from '../components/ea-ultimate/Features'
import Reviews from '../components/ea-ultimate/Reviews'
import Pricing from '../components/ea-ultimate/Pricing'

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
    <div className="mb-16" />
  </Layout>
)

export default IndexPage
