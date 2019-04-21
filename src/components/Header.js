import { Link } from 'gatsby'
import React from 'react'
import LogoTextless from './Icons/LogoTextless'

const Header = () => (
  <header className="container py-6">
    <nav className="flex text-xl items-center">
      <Link
        to="/"
        className="ml-2 sm:ml-0 font-bold text-2xl tracking-tight flex items-center"
      >
        <LogoTextless className="mr-3" />
        PHP Inspections
      </Link>
      <div className="ml-auto w-56 flex justify-around">
        <Link to="/" className="hover:underline">
          Docs
        </Link>
        <Link to="/ea-ultimate" className="hover:underline">
          EA Ultimate
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
