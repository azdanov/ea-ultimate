import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Logo from '../components/icons/Logo'
import LayoutDocs from '../components/LayoutDocs'

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <LayoutDocs>
        <div className="w-5/6 mx-auto">
          <div className="flex items-center mb-6">
            <Logo brand="EA Extended" width="8rem" height="8rem" />
            <div className="ml-6">
              <h1 className="text-4xl font-semibold sm:mx-auto inline-block">
                PHP&nbsp;Inspections (EA&nbsp;Extended)
              </h1>
              <p className="text-cool-grey-500">
                This project is an OSS Static Code Analysis{` `}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-blue-vivid-700 hover:underline"
                  href="https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-"
                >
                  tool
                </a>
                {` `}
                for PhpStorm (2016.2+) and Idea Ultimate.
              </p>
            </div>
          </div>
          <div className="text-xl">
            <p>It covers:</p>
            <ul className="list-disc ml-8">
              <li>architecture related issues</li>
              <li>weak types control and possible code construct simplifications</li>
              <li>performance issues</li>
              <li>non-optimal, duplicate and suspicious "if" conditions</li>
              <li>validation of magic methods usage</li>
              <li>regular expressions</li>
              <li>validation of exception handling workflow</li>
              <li>compatibility issues</li>
              <li>variety of time-consuming bugs</li>
              <li>PhpUnit API usage</li>
              <li>security issues</li>
            </ul>
            <p>
              Some of inspections are expecting conditional statements (e.g. "if") to
              use group statement for wrapping body expressions. If this requirement is
              met then additional inspections are applied to the source code.
            </p>
            <p>
              On some projects CPU and therefore battery usage could be intensive, so it
              should be taken into account when traveling
            </p>
          </div>
        </div>
      </LayoutDocs>
    </Layout>
  )
}

export default Index
