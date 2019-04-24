const path = require(`path`)
const { createPath } = require(`./src/utils`)

/** @typedef {{data: {github: {repository: {object: {entries: [{name: string}]}}}}}} Data */

module.exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: `babel-plugin-tailwind-components` })
}

module.exports.createPages = async ({ actions, graphql }) => {
  /** @type Data */
  const { data } = await graphql(`
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

  data.github.repository.object.entries.forEach(({ name }) => {
    if (!name.endsWith(`.md`)) return
    actions.createPage({
      path: `docs/${createPath(name)}`,
      component: path.resolve(`./src/templates/docs.js`),
      context: {
        expression: `master:docs/${name}`,
      },
    })
  })
}
