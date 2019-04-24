import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Logo from '../components/icons/Logo'
import LayoutDocs from '../components/LayoutDocs'

const Docs = () => {
  return (
    <Layout>
      <Seo
        title="Docs"
        keywords={[
          `PHP`,
          `Inspection`,
          `PHP Inspections`,
          `EA Extended`,
          `EA Ultimate`,
          `Documentation`,
          `Docs`,
        ]}
      />
      <LayoutDocs>
        <div className="mx-auto w-5/6">
          <div className="flex flex-wrap-reverse items-center justify-center lg:flex-no-wrap mb-6">
            <Logo className="w-32" brand="EA Extended" width="8rem" height="8rem" />
            <div className="ml-6">
              <h1 className="font-semibold inline-block leading-none sm:mx-auto text-4xl">
                PHP&nbsp;Inspections (EA&nbsp;Extended)
              </h1>
              <p className="text-cool-grey-500">
                This project is an OSS Static Code Analysis{` `}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-light-blue-vivid-700"
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
            <p className="mb-0">It covers:</p>
            <ul className="ml-8 list-disc">
              <li>Architecture Related Issues</li>
              <li>Weak Types Control and Possible Code Construct Simplifications</li>
              <li>Performance Issues</li>
              <li>Non-Optimal, Duplicate and Suspicious "if" Conditions</li>
              <li>Validation of Magic Methods Usage</li>
              <li>Regular Expressions</li>
              <li>Validation of Exception Handling Workflow</li>
              <li>Compatibility Issues</li>
              <li>Variety of Time-consuming Bugs</li>
              <li>PHPUnit API Usage</li>
              <li>Security Issues</li>
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

export default Docs
