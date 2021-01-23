import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/jsx-filename-extension
const LinkRender = ({ children }) => <span>{children} 🌍</span>;
LinkRender.propTypes = {
  children: PropTypes.node.isRequired
};

export default {
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel']
        })
    }
  ],
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender
  }
};
