import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import LogoTextless from './icons/LogoTextless'

const Header = ({ title }) => (
  <header className="container py-6">
    <nav className="flex text-xl items-center">
      <Link
        to="/"
        className="ml-2 sm:ml-0 font-bold text-2xl tracking-tight flex items-center"
      >
        <LogoTextless className="mr-3" />
        {title}
      </Link>
      <div className="ml-auto w-40 flex justify-around">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/docs" className="hover:underline">
          Docs
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
