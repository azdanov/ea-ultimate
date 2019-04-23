import { Link } from 'gatsby'
import React from 'react'
import LogoTextless from './icons/LogoTextless'

const Header = () => (
  <header className="container py-6">
    <nav className="flex text-xl items-center">
      <Link
        to="/"
        className="ml-2 sm:ml-0 font-bold text-2xl tracking-tight flex items-center"
      >
        <LogoTextless className="mr-3" />
        PHP Inspections (EA
        <span className="hidden md:inline-block">&nbsp;Extended</span>)
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

export default Header
