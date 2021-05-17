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
    titleTemplate: '%s • Debt Collective',
    description:
      "We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all. #YouAreNotALoan",
    author: 'Debt Collective',
    twitterUsername: '@StrikeDebt',
    facebookPage: 'https://www.facebook.com/DebtCollective',
    image: `${siteUrl}/seo.png`,
    url: siteUrl
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
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
        '@formatters': path.join(__dirname, 'src/formatters'),
        '@static': path.join(__dirname, 'static')
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
        fonts: ['Libre+Franklin:300,400,600,800,900', 'Material+Icons'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // To enable preview of drafts, copy .env.sample into .env.development,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-plugin-chatwoot`,
      options: {
        baseUrl: process.env.CHATWOOT_BASE_URL,
        websiteToken: process.env.CHATWOOT_WEBSITE_TOKEN,
        includeInDevelopment: !!process.env.CHATWOOT_INCLUDE_IN_DEVELOPMENT,

        // https://www.chatwoot.com/docs/website-sdk
        chatwootSettings: {
          type: 'expanded_bubble'
        }
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [`BRANCH`]
      }
    }
  ]
};
