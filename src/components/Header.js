import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import LogoTextless from './icons/LogoTextless'

const Header = ({ title }) => (
  <StyledHeader>
    <Nav>
      <LinkLogo to="/">
        <LogoTextless className="mr-3" />
        {title}
      </LinkLogo>
      <Links>
        <Link to="/" className="hover:underline" activeClassName="underline">
          Home
        </Link>
        <Link
          to="/docs"
          className="hover:underline"
          activeClassName="underline"
          partiallyActive
        >
          Docs
        </Link>
        <Link
          to="/blog"
          className="hover:underline"
          activeClassName="underline"
          partiallyActive
        >
          Blog
        </Link>
      </Links>
    </Nav>
  </StyledHeader>
)

const StyledHeader = styled.header`
  ${tw`py-6 container`}
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

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
