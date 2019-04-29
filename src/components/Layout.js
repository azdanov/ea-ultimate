import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import Header from './Header'
import '../styles/index.css'
import { Footer } from './Footer'

const Layout = ({ children, borderTop }) => {
  const { site } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <App>
      <Header title={site.siteMetadata.title} />
      <Main borderTop={borderTop}>{children}</Main>
      <Footer />
    </App>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
}

Layout.defaultProps = {
  borderTop: true,
}

const App = styled.div`
  ${tw`subpixel-antialiased text-cool-gray-900 font-main flex flex-col h-screen`}
`

const Main = styled.main`
  border-top-width: ${({ borderTop }) => (borderTop ? `1px` : 0)};
  ${tw`border-cool-gray-100 bg-cool-gray-050 flex-1`}
`

export default Layout
