const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  return graphql(`
    {
      allReview {
        edges {
          node {
            id
            numberId
          }
        }
      }
    }
  `).then(result => {
    result.data.allReview.edges.forEach(({ node }) => {
      createPage({
        path: `/reviews/${node.id}`,
        component: path.resolve(`./src/templates/reviewPage.js`),
        context: {
          id: node.id,
        },
      })

      /* Rails(MySQL) => Gatsby(Firestore)移行対応
       * - Rails版ではMySQLが採番するauto incremental idをpathに使っていた
       * - Firestoreではdefaultで採番されるdocument ID(例: `2OBiQTDOAxgMefpQWgrq`)を使う
       * SEOなどの観点から、Rails(MySQL)版の旧pathから新pathへのredirectを設定する
       */
      if (node.numberId > 0) {
        createRedirect({
          fromPath: `/kuchikomis/${node.numberId}`,
          toPath: `/reviews/${node.id}`,
          redirectInBrowser: true,
          isPermanent: true,
        })
      }
    })
  })
}
