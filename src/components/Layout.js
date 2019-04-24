import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './Header'
import '../styles/index.css'
import { Footer } from './Footer'

const Layout = ({ children, borderTop }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="antialiased text-cool-grey-900 font-main flex flex-col h-screen">
      <Header title={data.site.siteMetadata.title} />
      <main
        className={classNames([
          { 'border-cool-grey-100 border-t': borderTop },
          `bg-cool-grey-050`,
          `flex-1`,
        ])}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
}

Layout.defaultProps = {
  borderTop: true,
}

export default Layout
