import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { LightBlueAnchor } from './styled'

export const Footer = () => {
  const {
    site: {
      siteMetadata: { owner, ownerUrl },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          owner
          ownerUrl
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Line />©{` `}
      {new Date().getFullYear()}
      {` `}
      <Link target="_blank" rel="noopener noreferrer" href={ownerUrl}>
        {owner}
      </Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  ${tw`bg-cool-gray-050 pb-8 text-center`}
`
const Line = styled.div`
  ${tw`border-cool-gray-100 border-t pb-8`}
`
const Link = styled(LightBlueAnchor)`
  ${tw`text-light-blue-vivid-900`}
`
