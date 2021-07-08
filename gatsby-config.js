const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const myCustomQueries = {
    xs: '(max-width: 500px)',
    sm: '(max-width: 850px)',
    md: '(max-width: 1200px)',
    l: '(max-width: 1600px)',
};

module.exports = {
  siteMetadata: {
    title: "personal",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "ceac098c01136064b7e5d11d4fd9a5",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    `gatsby-plugin-layout`,
  
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
  resolve: "gatsby-plugin-breakpoints",
  options: {
    queries: myCustomQueries,
  }
},
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
    },
},
  ],
};
