/* eslint-disable unicorn/prevent-abbreviations */
import { graphql, Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { capitalize } from 'lodash'
import { createPath } from '../utils'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Docs = ({ data }) => {
  const { entries } = data.github.files.edges[0].node.object
  return (
    <Layout>
      <Seo title="Docs" />
      <div className="py-8 -mb-6">
        <div className="container shadow bg-white pt-6 pb-10 mx-4 mx-auto w-full sm:w-5/6 md:w-4/5 lg:w-3/4 rounded">
          <h1 className="text-3xl font-semibold mx-8 sm:mx-auto w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
            Documentation
          </h1>
          <ul className="list-disc text-xl mx-8 sm:mx-auto w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
            {entries.map(({ name, oid }) => {
              if (!name.endsWith(`.md`)) return null
              return (
                <li key={oid}>
                  <Link to={`docs/${createPath(name)}`}>
                    {capitalize(name.replace(`.md`, ``))}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

Docs.propTypes = {
  data: PropTypes.shape({}),
}

export const query = graphql`
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
`

export default Docs
