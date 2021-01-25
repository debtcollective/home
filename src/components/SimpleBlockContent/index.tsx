import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import classnames from 'clsx';

interface Props {
  className?: string;
  blocks: unknown;
}

function SimpleBlockContent({ className, blocks }: Props) {
  if (!blocks) {
    console.error('Missing blocks');
    return null;
  }

  const classNames = classnames(className, 'simple-block-content');

  return (
    <div className={classNames}>
      <BlockContent blocks={blocks} className={className} />
    </div>
  );
}

export default SimpleBlockContent;
