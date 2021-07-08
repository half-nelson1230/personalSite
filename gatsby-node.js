const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allDatoCmsWork {
        edges
          {
          node {
            url
          }
        }
      }
    }
  `).then(result => {
    result.data.allDatoCmsWork.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.url}/`,
        component: path.resolve(`./src/templates/work.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          url: node.url,
        },
      })
    })

  })
}
