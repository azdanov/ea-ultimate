const path = require(`path`)
const { createPath } = require(`./src/utils`)

module.exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      github {
        repository(owner: "kalessil", name: "phpinspectionsea") {
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
  `)

  data.github.repository.object.entries.forEach(
    /** @param {string} name */
    ({ name }) => {
      if (!name.endsWith(`.md`)) return
      actions.createPage({
        path: `docs/${createPath(name)}`,
        component: path.resolve(`./src/templates/docs.js`),
        context: {
          location: `master:docs/${name}`,
        },
      })
    },
  )
}
