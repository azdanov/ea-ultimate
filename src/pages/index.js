import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/ea-ultimate/Hero'
import Features from '../components/ea-ultimate/Features'
import Reviews from '../components/ea-ultimate/Reviews'
import Pricing from '../components/ea-ultimate/Pricing'

const Index = () => (
  <Layout borderTop={false}>
    <Seo
      title="Home"
      keywords={[
        `PHP`,
        `Inspection`,
        `PHP Inspections`,
        `EA Ultimate`,
        `Features`,
        `Price`,
      ]}
    />
    <Hero />
    <Features />
    <Reviews />
    <Pricing />
    <Spacer />
  </Layout>
)

const Spacer = styled.div`
  ${tw`mb-6`}
`

export default Index
