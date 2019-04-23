import React from 'react'
import Bug from '../icons/Bug'
import Comment from '../icons/Comment'
import Code from '../icons/Code'
import GraduationCap from '../icons/GraduationCap'

const Features = () => (
  <article className="container">
    <h2 id="features" className="mt-8 font-semibold mb-4 text-center text-4xl">
      Features
    </h2>
    <div className="pb-5 flex flex-wrap">
      <section className="w-1/2 lg:w-1/4 text-center">
        <Bug className="w-20 h-24 mb-1 mx-auto text-red-600" />
        <div className="px-4">
          <div className="font-bold text-xl mb-1">Extensive Checks</div>
          <p>
            Identify bugs, security, and performance issues before they hit production
            environment: 190 rules organized in 12 groups.
          </p>
        </div>
      </section>
      <section className="w-1/2 lg:w-1/4 text-center">
        <Comment className="w-20 h-24 mb-1 mx-auto text-teal-600" />
        <div className="px-4">
          <div className="font-bold text-xl mb-1">Professional Support</div>
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
      <section className="w-1/2 lg:w-1/4 text-center">
        <Code className="w-24 h-24 mb-1 mx-auto text-indigo-600" />
        <div className="px-4">
          <div className="font-bold text-xl mb-1">IDE Integration</div>
          <p>
            Increase team's velocity with on-the-fly analysis and quick-fixes with our
            plugin for PhpStorm 2016.2+ and IdeaUltimate.
          </p>
        </div>
      </section>
      <section className="w-1/2 lg:w-1/4 text-center">
        <GraduationCap className="w-24 h-24 mb-1 mx-auto text-blue-600" />
        <div className="px-4">
          <div className="font-bold text-xl mb-1">Insightful Hints</div>
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
