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
    <main className="bg-cool-grey-050 pb-16">{children}</main>
    <footer className="font-title bg-cool-grey-050 text-center pb-8">
      <div className="w-4/5 mx-auto border-t border-cool-grey-100 pb-8" />©{` `}
      {new Date().getFullYear()}
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
