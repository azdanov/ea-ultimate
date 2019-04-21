import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import htmlRenderer from 'remark-html'
import { capitalize, constant } from 'lodash'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import HtmlToReact from 'html-to-react'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import theme from '../styles/prism'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import LayoutDocs from '../components/LayoutDocs'

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
  const name = location.pathname.split(`/`).pop()
  let { text } = github.repository.object
  text = text.replace(
    /(images\/[\w-]+.png)/g,
    `https://raw.githubusercontent.com/kalessil/phpinspectionsea/master/docs/$1`,
  )

  const link = `https://github.com/kalessil/phpinspectionsea/blob/master/docs/${pageContext.location
    .split(`/`)
    .pop()}`
  return (
    <Layout>
      <Seo title={capitalize(name)} />
      <LayoutDocs>
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
