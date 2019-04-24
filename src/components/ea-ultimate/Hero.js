import React from 'react'
import Logo from '../icons/Logo'

const Hero = () => (
  <div className="gradient">
    <div className="container">
      <div className="py-6 items-center flex-wrap flex">
        <div className="ml-2 sm:ml-0 sm:w-2/3 text-white w-full">
          <h1 className="font-semibold mb-3 sm:text-left text-4xl text-center">
            Php Inspections (EA&nbsp;Ultimate)
          </h1>
          <p className="text-xl">
            Based on{` `}
            <a
              href="https://github.com/kalessil/phpinspectionsea"
              className="hover:underline text-light-blue-vivid-200"
            >
              Php Inspections (EA Extended)
            </a>
            , focuses on finding defects, security, performance issues and,
            maintainability: 39 new and 20 enhanced inspections around bugs and security
            (and counting).
          </p>
          <p className="text-xl">From the creator of Php Inspections (EA Extended).</p>
        </div>
        <div className="sm:w-1/3 w-full">
          <div className="mx-auto w-56">
            <Logo width="15rem" height="15rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
