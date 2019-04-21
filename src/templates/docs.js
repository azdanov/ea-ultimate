import { graphql } from 'gatsby'
import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import htmlRenderer from 'remark-html'
import { capitalize, constant } from 'lodash'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import HtmlToReact from 'html-to-react'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import GithubSlugger from 'github-slugger'
import theme from '../styles/prism'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import LayoutDocs from '../components/LayoutDocs'

const slugger = new GithubSlugger()
const HtmlToReactParser = HtmlToReact.Parser
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
const processingInstructions = [
  {
    // Replace <pre> with SyntaxHighlighter.
    shouldProcessNode: node => node.name && node.name === `pre`,
    processNode: (node, children, index) => {
      // Support <code> tags inside of <pre> tags.
      const nodeToProcess = node.children[0].name === `code` ? node.children[0] : node
      const language = nodeToProcess.attribs.class.split(`-`).pop()
      return (
        <SyntaxHighlighter key={index} language={language} style={theme}>
          {nodeToProcess.children.map(n => n.data).join(``)}
        </SyntaxHighlighter>
      )
    },
  },
  {
    shouldProcessNode: constant(true),
    processNode: processNodeDefinitions.processDefaultNode,
  },
]
const htmlToReactParser = new HtmlToReactParser()

const Docs = ({ data: { github }, location, pageContext }) => {
  const [headingList, setHeadingList] = useState([])
  console.log(location)
  const name = location.pathname
    .replace(/\/$/, ``)
    .split(`/`)
    .pop()

  let { text } = github.repository.object
  text = text.replace(
    /(images\/[\w-]+.png)/g,
    `https://raw.githubusercontent.com/kalessil/phpinspectionsea/master/docs/$1`,
  )

  const link = `https://github.com/kalessil/phpinspectionsea/blob/master/docs/${pageContext.location
    .split(`/`)
    .pop()}`

  useLayoutEffect(() => {
    slugger.reset()
    const list = []

    remark()
      .use(() => {
        return tree => {
          list.push(
            ...tree.children
              .filter(({ type }) => type === `heading`)
              .map(child => {
                return {
                  parent: name,
                  id: slugger.slug(child.children[child.children.length - 1].value),
                  text: child.children[child.children.length - 1].value,
                }
              }),
          )
        }
      })
      .processSync(text)

    setHeadingList(list)
  }, [])

  return (
    <Layout>
      <Seo title={capitalize(name)} />
      <LayoutDocs headingList={headingList} docName={name}>
        <div className="documentation">
          {htmlToReactParser.parseWithInstructions(
            remark()
              .use(slug)
              .use(headings)
              .use(htmlRenderer)
              .processSync(text).contents,
            constant(true),
            processingInstructions,
          )}
          <blockquote className="mt-8">
            <p>
              Found a typo or have an improvement?{` `}
              <a target="_blank" rel="noopener noreferrer" href={link}>
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
  query($location: String!) {
    github {
      repository(owner: "kalessil", name: "phpinspectionsea") {
        ... on GitHub_Repository {
          object(expression: $location) {
            ... on GitHub_Blob {
              text
            }
          }
        }
      }
    }
  }
`

export default Docs
