import { graphql } from 'gatsby'
import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import { capitalize } from 'lodash'
import slugify from '@sindresorhus/slugify'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import LayoutDocs from '../components/LayoutDocs'
import { renderReactWithPrismJs } from '../utils'

const Docs = ({ data: { github }, location, pageContext }) => {
  const [headingList, setHeadingList] = useState([])
  const name = location.pathname
    .replace(/\/$/, ``)
    .split(`/`)
    .pop()

  let { text } = github.repository.object
  text = text.replace(
    /(images\/[\w-]+.png)/g,
    `https://raw.githubusercontent.com/kalessil/phpinspectionsea/master/docs/$1`,
  )

  const editLink = `https://github.com/kalessil/phpinspectionsea/blob/master/docs/${pageContext.expression
    .split(`/`)
    .pop()}`

  useLayoutEffect(() => {
    remark()
      .use(() => {
        return tree => {
          setHeadingList(
            tree.children
              .filter(({ type }) => type === `heading`)
              .map(child => {
                return {
                  id: slugify(child.children[child.children.length - 1].value),
                  value: child.children[child.children.length - 1].value,
                }
              }),
          )
        }
      })
      .processSync(text)
  }, [])

  return (
    <Layout>
      <Seo title={capitalize(name)} />
      <LayoutDocs headingList={headingList} currentCategory={name}>
        <div className="documentation">
          {renderReactWithPrismJs(text)}
          <blockquote className="mt-8">
            <p>
              Found a typo or have an improvement?{` `}
              <a target="_blank" rel="noopener noreferrer" href={editLink}>
                Edit this page.
              </a>
            </p>
          </blockquote>
        </div>
      </LayoutDocs>
    </Layout>
  )
}

Docs.propTypes = {
  data: PropTypes.shape({}),
  location: PropTypes.shape({}),
  pageContext: PropTypes.shape({ location: PropTypes.string }),
}

export const query = graphql`
  query($expression: String!) {
    github {
      repository(owner: "kalessil", name: "phpinspectionsea") {
        object(expression: $expression) {
          ... on GitHub_Blob {
            text
          }
        }
      }
    }
  }
`

export default Docs
