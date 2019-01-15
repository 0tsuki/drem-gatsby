module.exports = {
  siteMetadata: {
    title: `DREM`,
    description: `教習所クチコミサイト`,
    author: `@0tsuki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require(`./firebase-adminsdk-serviceAccountKey.json`),
        types: [
          {
            type: `Review`,
            collection: `reviews`,
            map: doc => ({
              id: doc.id,
              numberId: doc.numberId,
              title: doc.title,
              author: doc.author,
              body: doc.body,
              displayable: doc.displayable,
              reviewedAt: doc.reviewedAt,
              rating: doc.rating,
              school: {
                numberId: doc.school.numberId,
                prefecture: doc.school.prefecture,
                name: doc.school.name,
              },
              tags: doc.tags.map(tag => ({
                numberId: tag.numberId,
                name: tag.name,
              })),
            }),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
