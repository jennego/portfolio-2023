/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createPortfolioPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allContentfulPortfolio || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug, name } = edge.node
    const path = `/projects/${slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id,
        name,
        prev: index === 0 ? null : pageEdges[index - 1].node,
        next: index === pageEdges.length - 1 ? null : pageEdges[index + 1].node,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPortfolioPages(graphql, actions)
}
