import React from 'react'
import Logo from '../Icons/Logo'

const Hero = () => (
  <div className="gradient">
    <div className="container">
      <div className="flex flex-wrap items-center py-6">
        <div className="w-full sm:w-2/3 ml-2 sm:ml-0 text-white">
          <h1 className="text-center sm:text-left text-4xl mb-3 font-semibold">
            Php Inspections (EA&nbsp;Ultimate)
          </h1>
          <p className="text-xl">
            Based on{` `}
            <a
              href="https://github.com/kalessil/phpinspectionsea"
              className="text-light-blue-vivid-200 hover:underline"
            >
              Php Inspections (EA Extended)
            </a>
            , focuses on finding defects, security, performance issues and,
            maintainability: 39 new and 20 enhanced inspections around bugs and security
            (and counting).
          </p>
          <p className="text-xl">From the creator of Php Inspections (EA Extended).</p>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="w-56 mx-auto">
            <Logo width="15rem" height="15rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
