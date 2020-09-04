const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'The Debt Collective',
    description: '',
    author: '@debtcollective'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: path.join(__dirname, 'static')
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        sections: path.join(__dirname, 'src/sections'),
        constants: path.join(__dirname, 'src/constants'),
        utils: path.join(__dirname, 'src/utils'),
        static: path.join(__dirname, 'static')
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')]
      }
    }
  ]
};
