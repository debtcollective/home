import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
}

const SEO: React.FC<Props> = (props) => {
  const { description, lang } = props;
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
  const title = props.title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
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
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:image',
          content: site.siteMetadata.image
        }
      ]}
    >
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}favicon/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}favicon/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />
    </Helmet>
  );
};

export default SEO;
