import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

interface Props {
  className?: string;
  blocks: unknown;
}

function SimpleBlockContent({ className, blocks }: Props) {
  if (!blocks) {
    console.error('Missing blocks');
    return null;
  }

  return (
    <div className="simple-block-content">
      <BlockContent blocks={blocks} className={className} />
    </div>
  );
}

export default SimpleBlockContent;
