import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import Logo from '../icons/Logo'
import { Container } from '../styled'

const Hero = () => (
  <Gradient>
    <Container>
      <Body>
        <Content>
          <Title>Php Inspections (EA&nbsp;Ultimate)</Title>
          <Text>
            Based on{` `}
            <a
              href="https://github.com/kalessil/phpinspectionsea"
              className="hover:underline text-light-blue-vivid-200"
            >
              Php Inspections (EA Extended)
            </a>
            , focuses on finding defects, security, performance issues and,
            maintainability: 39 new and 20 enhanced inspections around bugs and security
            (and counting).
          </Text>
          <Text>From the creator of Php Inspections (EA Extended).</Text>
        </Content>
        <LogoContainer>
          <Wrapper>
            <Logo width="15rem" height="15rem" />
          </Wrapper>
        </LogoContainer>
      </Body>
    </Container>
  </Gradient>
)

const Gradient = styled.div`
  background-color: #232d7c;
  background-image: linear-gradient(
    to bottom left,
    rgb(25, 33, 108) 50%,
    rgb(45, 58, 140) 50%
  );
  ${tw`overflow-hidden`}
`
const Body = styled.div`
  ${tw`py-6 items-center flex-wrap flex`}
`
const Content = styled.div`
  ${tw`ml-2 sm:ml-0 sm:w-2/3 text-white w-full`}
`
const Title = styled.h1`
  ${tw`font-semibold mb-3 sm:text-left text-4xl text-center`}
`
const Text = styled.p`
  ${tw`text-xl`}
`
const LogoContainer = styled.aside`
  ${tw`sm:w-1/3 w-full`}
`
const Wrapper = styled.div`
  ${tw`mx-auto w-56`}
`

export default Hero
