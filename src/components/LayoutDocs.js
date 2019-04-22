import React from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { capitalize } from 'lodash'
import { createPath } from '../utils'
import GitHub from './icons/Github'
import Twitter from './icons/Twitter'
import Patreon from './icons/Patreon'

const LayoutDocs = ({ children, headingList, docName }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        repository(owner: "kalessil", name: "phpinspectionsea") {
          object(expression: "master:docs/") {
            ... on GitHub_Tree {
              entries {
                name
                oid
              }
            }
          }
        }
      }
    }
  `)
  const { entries } = data.github.repository.object

  return (
    <div className="flex md:mx-3 pt-10">
      <div className="w-64 ml-3 pb-10 pr-3 mt-4 docs-menu h-screen overflow-auto">
        <div className="w-24 flex justify-between text-cool-grey-400 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/kalessil"
            aria-label="Patreon"
          >
            <Patreon
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kalessil"
            aria-label="Twitter"
          >
            <Twitter
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kalessil/phpinspectionsea"
            aria-label="GitHub"
          >
            <GitHub
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
        </div>
        <ul className="text-xl sm:mx-auto">
          <li className="text-cool-grey-500 mb-3">Documentation</li>
          <li className="text-base mb-2">
            <Link to="/" className="hover:underline" activeClassName="underline">
              Introduction
            </Link>
          </li>
          {entries.map(({ name, oid }) => {
            if (!name.endsWith(`.md`)) return null
            const doc = name.replace(`.md`, ``).toLowerCase()
            const subMenu = () => (
              <ul className="border-l-2 border-cool-grey-100 mt-2 leading-tight">
                {headingList.map(({ id, text }) => (
                  <li key={id} className="text-base mb-2 overflow-hidden">
                    <Link
                      to={`docs/${createPath(name)}/#${id}`}
                      className={`inline-block hover:underline ml-3`}
                      activeClassName="underline"
                    >
                      {capitalize(text)}
                    </Link>
                  </li>
                ))}
              </ul>
            )
            return (
              <li key={oid} className="text-base mb-2 overflow-hidden">
                <Link
                  to={`docs/${createPath(name)}`}
                  className="hover:underline"
                  activeClassName="underline"
                  partiallyActive
                >
                  {capitalize(doc)}
                </Link>
                {doc === docName ? subMenu() : null}
              </li>
            )
          })}
        </ul>
      </div>
      <main className="w-4/5 bg-white py-8 pb-8 ml-auto rounded border border-cool-gray-100">
        {children}
      </main>
    </div>
  )
}

LayoutDocs.propTypes = {
  children: PropTypes.node.isRequired,
  docName: PropTypes.string,
  headingList: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default LayoutDocs
