import React from 'react';

const HeroHighlight: React.FC = (props) => (
  <span className="not-italic text-yellow">{props.children}</span>
);

export default HeroHighlight;
