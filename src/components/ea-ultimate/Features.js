import React from 'react'
import Bug from '../icons/Bug'
import Comment from '../icons/Comment'
import Code from '../icons/Code'
import GraduationCap from '../icons/GraduationCap'

const Features = () => (
  <article className="container">
    <h2 id="features" className="text-center text-4xl mt-8 mb-4 font-semibold">
      Features
    </h2>
    <div className="flex flex-wrap pb-5">
      <section className="lg:w-1/4 sm:w-1/2 text-center w-full">
        <Bug className="h-24 mb-1 mx-auto text-red-600 w-20" />
        <div className="px-4">
          <div className="font-bold mb-1 text-xl">Extensive Checks</div>
          <p>
            Identify bugs, security, and performance issues before they hit production
            environment: 190 rules organized in 12 groups.
          </p>
        </div>
      </section>
      <section className="lg:w-1/4 sm:w-1/2 text-center w-full">
        <Comment className="h-24 mb-1 mx-auto text-teal-600 w-20" />
        <div className="px-4">
          <div className="font-bold mb-1 text-xl">Professional Support</div>
          <p>
            Bugs getting fixed fast, documentation gets extended with practical advice:
            check our{` `}
            <a
              className="text-light-blue-vivid-700 hover:underline"
              href="https://plugins.jetbrains.com/plugin/10215-php-inspections-ea-ultimate-"
            >
              latest release notes.
            </a>
          </p>
        </div>
      </section>
      <section className="lg:w-1/4 sm:w-1/2 text-center w-full">
        <Code className="h-24 mb-1 mx-auto text-indigo-600 w-24" />
        <div className="px-4">
          <div className="font-bold mb-1 text-xl">IDE Integration</div>
          <p>
            Increase team's velocity with on-the-fly analysis and quick-fixes with our
            plugin for PhpStorm 2016.2+ and IdeaUltimate.
          </p>
        </div>
      </section>
      <section className="lg:w-1/4 sm:w-1/2 text-center w-full">
        <GraduationCap className="h-24 mb-1 mx-auto text-blue-600 w-24" />
        <div className="px-4">
          <div className="font-bold mb-1 text-xl">Insightful Hints</div>
          <p>
            Better understanding of code quality and improvement space: Architecture,
            Probable bugs, Code Style and more.
          </p>
        </div>
      </section>
    </div>
  </article>
)

export default Features
