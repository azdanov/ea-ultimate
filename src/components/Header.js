import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import LogoTextless from './icons/LogoTextless'

const Header = ({ title }) => (
  <header className="py-6 container">
    <nav className="flex items-center text-xl">
      <Link
        to="/"
        className="flex font-bold items-center ml-2 sm:ml-0 text-2xl tracking-tight"
      >
        <LogoTextless className="mr-3" />
        {title}
      </Link>
      <div className="flex justify-around ml-auto w-56">
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
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
