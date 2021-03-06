import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Badge, Container, Title } from '../styled'

const Pricing = () => (
  <Container>
    <Title id="pricing">Pricing and payment</Title>
    <Body>
      <Section>
        <Wrapper>
          <div>
            <PricingTitle>Early Supporter License</PricingTitle>
            <Price>
              $30
              <span className="meta"> / year</span>
            </Price>
            <Headline>For our supporters in 2017</Headline>
            <Text>Single 1-year license Private and commercial usage.</Text>
          </div>
          <div>
            <small>Request handling up to 5 business days</small>
            <ButtonOutlineLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/forms/MOCnGsapwE5r5oQn1"
            >
              Get Discount!
            </ButtonOutlineLink>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div>
            <PricingTitle>OSS Supporter License</PricingTitle>
            <Price>
              $5<span className="meta"> / month</span>
            </Price>
            <Headline>For our supporters in 2018</Headline>
            <Text>
              Single license Private and commercial usage Just become a $5{` `}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/kalessil"
              >
                Patron
              </a>
            </Text>
          </div>
          <div>
            <small>Use as long as staying a Patron</small>
            <ButtonOutlineLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.patreon.com/kalessil"
            >
              Become a Patron!
            </ButtonOutlineLink>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div>
            <PricingTitle>Personal License</PricingTitle>
            <Price>
              $50<span className="meta"> / year</span>
            </Price>
            <Headline>For individuals</Headline>
            <Text>
              Single 1-year license Private and commercial usage General support (5
              business days)
            </Text>
          </div>
          <div>
            <small>Free for PHP UGs leads</small>
            <ButtonLightBlueLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/forms/MOCnGsapwE5r5oQn1"
            >
              Buy License!
            </ButtonLightBlueLink>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div>
            <div className="items-center inline-flex">
              <PricingTitle>Commercial&nbsp;License</PricingTitle>
              {` `}
              <Badge>New</Badge>
            </div>
            <Price>
              $100<span className="meta"> / year</span>
            </Price>
            <Headline>For companies</Headline>
            <Text>
              Volume 1-year licenses Commercial usage only Priority support (2 business
              days)
            </Text>
          </div>
          <div>
            <small>Volume-based discounts (buy 4, get 5)</small>
            <ButtonOutlineLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/forms/M9JJJVoPQBBbXQtX2"
            >
              Buy Licenses!
            </ButtonOutlineLink>
          </div>
        </Wrapper>
      </Section>
    </Body>
  </Container>
)

const Body = styled.div`
  ${tw`flex flex-wrap`}
`
const Section = styled.section`
  ${tw`mx-auto overflow-hidden rounded sm:mb-6 sm:w-1/2 xl:w-1/4`}
`
const Wrapper = styled.div`
  ${tw`flex flex-col h-full justify-between px-6 py-4 text-center`}
`
const PricingTitle = styled.h3`
  ${tw`text-xl text-gray-800 font-bold`}
`
const ButtonBaseLink = styled.a`
  transition: all 0.15s;
  ${tw`block border-2 font-semibold mt-2 px-3 py-1 rounded shadow text-xl tracking-normal`}
`
const ButtonOutlineLink = styled(ButtonBaseLink)`
  ${tw`border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600`}
`
const ButtonLightBlueLink = styled(ButtonBaseLink)`
  ${tw`bg-light-blue-vivid-500 border-light-blue-vivid-500 hover:bg-light-blue-vivid-600 hover:border-light-blue-vivid-600 text-white`}
`
const Price = styled.p`
  .meta {
    ${tw`text-lg text-gray-800`}
  }
  ${tw`h-10 text-4xl text-center`}
`
const Headline = styled.h4`
  ${tw`mb-2 font-bold`}
`
const Text = styled.p`
  ${tw`text-base text-gray-darker`}
`
export default Pricing
