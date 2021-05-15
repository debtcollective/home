import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import clsx from 'clsx';

interface Props {
  className?: string;
  blocks: unknown | unknown[];
}

const ListComponent: React.FC<{ className?: string }> = (props) => (
  <ol className="my-4 ml-8 list-decimal md:ml-12">{props.children}</ol>
);

const ListItemComponent: React.FC<{ className?: string }> = (props) => (
  <li>{props.children}</li>
);

function SimpleBlockContent({ className, blocks }: Props) {
  if (!blocks) {
    console.error('Missing blocks');
    return null;
  }

  const classNames = clsx(className, 'simple-block-content');

  return (
    <div className={classNames}>
      <BlockContent
        blocks={blocks}
        className={className}
        serializers={{
          list: (ListComponent as unknown) as React.Component,
          listItem: (ListItemComponent as unknown) as React.Component
        }}
      />
    </div>
  );
}

export default SimpleBlockContent;
