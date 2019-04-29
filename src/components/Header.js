import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import LogoTextless from './icons/LogoTextless'
import { Container } from './styled'

const Header = ({ title }) => (
  <Container>
    <StyledHeader>
      <Nav>
        <LinkLogo to="/">
          <LogoTextless />
          <Title>{title}</Title>
        </LinkLogo>
        <Links>
          <StyledLink to="/" activeClassName="active">
            Home
          </StyledLink>
          <StyledLink to="/docs" activeClassName="active" partiallyActive>
            Docs
          </StyledLink>
          <StyledLink to="/blog" activeClassName="active" partiallyActive>
            Blog
          </StyledLink>
        </Links>
      </Nav>
    </StyledHeader>
  </Container>
)

const StyledHeader = styled.header`
  ${tw`py-6`}
`
const Nav = styled.nav`
  ${tw`flex items-center text-xl`}
`
const LinkLogo = styled(Link)`
  ${tw`flex font-bold items-center ml-2 sm:ml-0 text-2xl tracking-tight`}
`
const Links = styled.section`
  ${tw`flex justify-around ml-auto w-56`}
`
const Title = styled.span`
  ${tw`ml-3`}
`
const StyledLink = styled(Link)`
  ${tw`hover:underline`}
  &.active {
    ${tw`underline`}
  }
`

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
