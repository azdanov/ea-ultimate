import React from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { capitalize } from 'lodash'
import { createPath } from '../utils'

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
    <div>
      <div className="flex container mx-auto pt-10">
        <div className="w-64 ml-3 py-12">
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
        <main className="w-4/5 shadow bg-white py-6 pb-8 ml-auto rounded">
          {children}
        </main>
      </div>
    </div>
  )
}

DocumentationLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocumentationLayout
