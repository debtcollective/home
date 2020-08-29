import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
}

interface ISiteMetadata {
  title?: string;
  description?: string;
  author?: string;
}

const SEO: React.FC<Props> = ({ description, lang, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const { siteMetadata }: { siteMetadata: ISiteMetadata } = data.site;
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
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
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ]}
    ></Helmet>
  );
};

export default SEO;
