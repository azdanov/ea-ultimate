const path = require(`path`)
const { createPath } = require(`./src/utils`)

module.exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
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

  data.github.files.edges[0].node.object.entries.forEach(
    /** @param {string} name */
    ({ name }) => {
      if (!name.endsWith(`.md`)) return
      actions.createPage({
        path: `docs/${createPath(name)}`,
        component: path.resolve(`./src/components/DocumentationTemplate.js`),
        context: {
          location: `master:docs/${name}`,
        },
      })
    },
  )
}
