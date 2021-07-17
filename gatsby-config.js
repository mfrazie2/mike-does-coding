module.exports = {
  siteMetadata: {
    title: `Mike Does Coding`,
    description: `My personal blog`,
    twitter: `AFrazGuy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
  ],
};
