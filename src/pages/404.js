import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { LightBlueLink } from '../components/styled'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <Header>Not Found</Header>
      <Paragraph>You just hit a page that doesn't exist...</Paragraph>
      <LinkHome to="/">Try Home?</LinkHome>
    </Container>
  </Layout>
)

const Container = styled.div`
  ${tw`bg-white flex flex-col h-full justify-center text-center`}
`
const Header = styled.h1`
  ${tw`mt-2 text-5xl`}
`
const Paragraph = styled.p`
  ${tw`text-2xl`}
`
const LinkHome = styled(LightBlueLink)`
  ${tw`text-2xl mb-3 self-center`}
`

export default NotFoundPage
