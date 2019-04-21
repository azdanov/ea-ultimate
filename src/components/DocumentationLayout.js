import React from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { capitalize } from 'lodash'
import { createPath } from '../utils'
import GitHub from './Icons/Github'
import Twitter from './Icons/Twitter'
import Patreon from './Icons/Patreon'

const DocumentationLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      github {
        files: search(
          first: 1
          type: REPOSITORY
          query: "repo:kalessil/phpinspectionsea"
        ) {
          edges {
            node {
              ... on GitHub_Repository {
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
        }
      }
    }
  `)
  const { entries } = data.github.files.edges[0].node.object

  return (
    <div className="flex container mx-auto pt-10">
      <div className="w-64 ml-3 mt-3">
        <div className="docs-menu">
          <div className="w-24 flex justify-between text-cool-grey-400 mb-6">
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
              return (
                <li key={oid} className="text-base mb-2">
                  <Link
                    to={`docs/${createPath(name)}`}
                    className="hover:underline"
                    activeClassName="underline"
                  >
                    {capitalize(name.replace(`.md`, ``))}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <main className="w-4/5 bg-white py-8 pb-8 ml-auto rounded border border-cool-gray-100">
        {children}
      </main>
    </div>
  )
}

DocumentationLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocumentationLayout
