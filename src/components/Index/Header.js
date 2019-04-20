import { Link } from 'gatsby'
import React from 'react'
import LogoTextless from '../Icons/LogoTextless'

const Header = () => (
  <header className="container py-6">
    <nav className="font-title flex text-xl items-center">
      <Link
        to="/"
        className="ml-2 sm:ml-0 font-bold text-2xl tracking-tight flex items-center"
      >
        <LogoTextless className="mr-3" />
        PHP Inspections
        <span className="absolute invisible md:relative md:visible">
          &nbsp;(EA&nbsp;Ultimate)
        </span>
      </Link>
      <div className="ml-auto w-56 flex justify-around">
        <a href="#features" className="hover:underline">
          Features
        </a>
        <a href="#pricing" className="hover:underline">
          Price
        </a>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  </header>
)

export default Header
