import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Reviews = () => (
  <Background>
    <Content>
      Interested in what people say about us?{` `}
      <ButtonLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-/reviews"
      >
        See&nbsp;Reviews
      </ButtonLink>
    </Content>
  </Background>
)

const Background = styled.article`
  ${tw`py-6 my-6 bg-indigo-400`}
`
const Content = styled.p`
  ${tw`flex flex-wrap items-baseline justify-center mb-0 sm:text-3xl text-2xl text-white tracking-tighter`}
`
const ButtonLink = styled.a`
  ${tw`bg-white font-semibold hover:bg-gray-200 md:my-0 ml-4 my-2 px-4 py-2 rounded shadow text-indigo-500 text-xl tracking-normal`}
`

export default Reviews
