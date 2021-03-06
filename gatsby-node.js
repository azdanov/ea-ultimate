const slugify = require(`@sindresorhus/slugify`)
const { get, uniq } = require(`lodash`)
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const createPaginatedPages = require(`gatsby-paginate`)

const { createPath } = require(`./src/utils`)

/** @typedef {{data: {github: {repository: {object: {entries: [{name: string}]}}}}}} Data */

module.exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: `babel-plugin-tailwind-components` })
}

module.exports.createPages = async ({ actions, graphql }) => {
  /** @type Data */
  const names = await graphql(`
    query {
      github {
        repository(owner: "kalessil", name: "phpinspectionsea") {
          object(expression: "master:docs/") {
            ... on GitHub_Tree {
              entries {
                name
              }
            }
          }
        }
      }
    }
  `)

  if (names.errors) {
    names.errors.forEach(e => console.error(e.toString()))
    return
  }

  names.data.github.repository.object.entries.forEach(({ name }) => {
    if (!name.endsWith(`.md`)) return
    actions.createPage({
      path: `docs/${createPath(name)}`,
      component: path.resolve(`./src/templates/docsPage.js`),
      context: {
        expression: `master:docs/${name}`,
      },
    })
  })

  const posts = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            timeToRead
            fields {
              slug
            }
            frontmatter {
              description
              title
              tags
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  if (posts.errors) {
    posts.errors.forEach(e => console.error(e.toString()))
    return
  }

  createPaginatedPages({
    edges: posts.data.allMarkdownRemark.edges,
    createPage: actions.createPage,
    pageTemplate: path.resolve(`src/templates/blogIndex.js`),
    pageLength: 2,
    pathPrefix: `blog`,
    context: {},
  })

  posts.data.allMarkdownRemark.edges.forEach(edge => {
    const { id } = edge.node
    actions.createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tagPage,
      component: path.resolve(`src/templates/blogPage.js`),
      context: {
        id,
      },
    })
  })

  let tags = []

  posts.data.allMarkdownRemark.edges.forEach(edge => {
    if (get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = uniq(tags)

  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${slugify(tag)}/`,
      component: path.resolve(`src/templates/tagPage.js`),
      context: {
        tag,
      },
    })
  })
}

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    })
  }
}
