import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import htmlRenderer from 'remark-html'
import { capitalize, constant } from 'lodash'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import HtmlToReact from 'html-to-react'
import Seo from './Seo'
import Layout from './Layout'

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
        <SyntaxHighlighter key={index} language={language} style={darcula}>
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

const DocumentationTemplate = ({ data: { github }, location }) => {
  const name = location.pathname.split(`/`).pop()
  let { text } = github.search.edges[0].node.object
  text = text.replace(
    /(images\/[\w-]+.png)/g,
    `https://raw.githubusercontent.com/kalessil/phpinspectionsea/master/docs/$1`,
  )
  return (
    <Layout>
      <Seo title={capitalize(name)} />
      <div className="py-8 -mb-6">
        <div className="documentation bg-white pt-1 pb-8 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto rounded">
          {htmlToReactParser.parseWithInstructions(
            remark()
              .use(htmlRenderer)
              .processSync(text).contents,
            constant(true),
            processingInstructions,
          )}
        </div>
      </div>
    </Layout>
  )
}

DocumentationTemplate.propTypes = {
  data: PropTypes.shape({}),
  location: PropTypes.shape({}),
}

export const query = graphql`
  query($location: String!) {
    github {
      search(first: 1, type: REPOSITORY, query: "repo:kalessil/phpinspectionsea") {
        edges {
          node {
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
    }
  }
`

export default DocumentationTemplate
