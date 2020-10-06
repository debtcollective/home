import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
}

const SEO: React.FC<Props> = (props) => {
  const { title, description, lang } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            facebookPage
            image
            url
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaTitleTemplate = `%s • 🟥 Debt Collective`;
  const metaTitleWithTemplate = metaTitleTemplate.replace('%s', metaTitle);

  return (
    <Helmet
      htmlAttributes={{
        lang: lang
      }}
      title={metaTitle}
      titleTemplate={metaTitleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: metaTitleWithTemplate
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: site.siteMetadata.image
        },
        {
          property: 'og:url',
          content: site.siteMetadata.url
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitterUsername
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.twitterUsername
        },
        {
          name: 'twitter:title',
          content: metaTitleWithTemplate
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:image',
          content: site.siteMetadata.image
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]}
      link={[
        {
          rel: 'icon',
          sizes: '180x180',
          href: `${withPrefix('/')}favicon/apple-touch-icon.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${withPrefix('/')}favicon/favicon-32x32.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${withPrefix('/')}favicon/favicon-16x16.png`
        },
        {
          rel: 'mask-icon',
          sizes: '16x16',
          href: `${withPrefix('/')}img/safari-pinned-tab.svg`,
          color: '#ff4400'
        }
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  title: '',
  description: ''
};

export default SEO;
