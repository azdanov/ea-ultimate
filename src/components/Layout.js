import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../styles/index.css'
import { Footer } from './Footer'

const Layout = ({ children, borderTop }) => (
  <div className="antialiased text-cool-grey-900 font-main flex flex-col h-screen">
    <Header />
    <main
      className={`bg-cool-grey-050 flex-1 ${
        borderTop ? `border-t border-cool-grey-100` : ``
      }`}
    >
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
}

Layout.defaultProps = {
  borderTop: true,
}

export default Layout
