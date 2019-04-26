const remark = require(`remark`)
const slug = require(`remark-slug`)
const headings = require(`remark-autolink-headings`)
const htmlRenderer = require(`remark-html`)
const { constant, eq } = require(`lodash`)
const HtmlToReact = require(`html-to-react`)
const React = require(`react`)
const { Prism: SyntaxHighlighter } = require(`react-syntax-highlighter`)
const slugify = require(`@sindresorhus/slugify`)

const theme = require(`../styles/prism`)

const HtmlToReactParser = HtmlToReact.Parser
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
const processingInstructions = [
  {
    // Replace <pre> with SyntaxHighlighter.
    shouldProcessNode: node => eq(node.name, `pre`),
    processNode: (node, children, index) => {
      // Support <code> tags inside of <pre> tags.
      const nodeToProcess = node.children[0].name === `code` ? node.children[0] : node
      const language =
        nodeToProcess.attribs.class && nodeToProcess.attribs.class.split(`-`).pop()
      return React.createElement(
        SyntaxHighlighter,
        {
          language,
          key: index,
          style: theme,
        },
        nodeToProcess.children.map(n => n.data).join(``),
      )
    },
  },
  {
    shouldProcessNode: constant(true),
    processNode: processNodeDefinitions.processDefaultNode,
  },
]
const htmlToReactParser = new HtmlToReactParser()

/** @param {string} path */
module.exports.createPath = path => slugify(path.replace(`.md`, ``))
/** @param {string} text */
module.exports.renderReactWithPrismJs = text =>
  htmlToReactParser.parseWithInstructions(
    remark()
      .use(slug)
      .use(headings)
      .use(htmlRenderer)
      .processSync(text).contents,
    constant(true),
    processingInstructions,
  )
