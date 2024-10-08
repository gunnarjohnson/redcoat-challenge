// eslint-disable-next-line
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `The Texas Redcoat Challenge`,
    description: `A homebrew competition for all British beer styles.`,
    author: `Gunnar Johnson`,
    siteUrl: `https://texasredcoat.com/`,
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/success`],
      },
    },
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
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `redcoat-challenge`,
        short_name: `redcoat`,
        start_url: `/`,
        background_color: `#e8e8e8`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/redcoat-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
