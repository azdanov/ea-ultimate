/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from './Index/Header'
import '../styles/index.css'

const Layout = ({ children }) => (
  <div className="antialiased text-cool-grey-900">
    <Header />
    <main className="bg-cool-grey-050 pb-12 border-b border-cool-grey-100">
      {children}
    </main>
    <footer className="font-title container text-center py-8">
      © {new Date().getFullYear()}
      {` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-blue-vivid-900 hover:underline"
        href="https://github.com/kalessil"
      >
        Vladimir Reznichenko
      </a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
