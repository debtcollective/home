const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);
require('dotenv').config({ path: `.env.${activeEnv}` });

const deployContext = process.env.DEPLOY_CONTEXT;
const isProduction = deployContext === 'production';
let siteUrl =
  process.env.DEPLOY_URL ||
  process.env.DEPLOY_PRIME_URL ||
  'http://localhost:8000';

if (isProduction) {
  siteUrl = process.env.URL;
}

const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'You are not a loan',
    description:
      "We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all. #YouAreNotALoan",
    author: 'Debt Collective',
    twitterUsername: '@0debtzone',
    facebookPage: 'https://www.facebook.com/DebtCollective',
    image: `${siteUrl}/seo.png`,
    url: siteUrl
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
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
        '@components': path.join(__dirname, 'src/components'),
        '@sections': path.join(__dirname, 'src/sections'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@services': path.join(__dirname, 'src/services'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@static': path.join(__dirname, 'static')
      }
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.GATSBY_COMMUNITY_URL}/about.json`,
        rootKey: 'about',
        schemas: {
          about: `
            user_count: Int
          `
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Libre+Franklin:400,600,800', 'Material+Icons'],
        display: 'swap'
      }
    }
  ]
};
