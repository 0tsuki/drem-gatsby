const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allReview {
        edges {
          node {
            title
            body
            author
            numberId
          }
        }
      }
    }
  `).then(result => {
    result.data.allReview.edges.forEach(({ node }) => {
      createPage({
        path: `/reviews/${node.numberId}`,
        component: path.resolve(`./src/templates/reviewPage.js`),
        context: {
          id: node.numberId,
        },
      })
    })
  })
}
