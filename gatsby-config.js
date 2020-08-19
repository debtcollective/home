module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    }
  ]
};
