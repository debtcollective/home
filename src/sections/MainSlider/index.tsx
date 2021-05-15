import React from 'react';
import BadgeSlider, { IBadge } from '@components/BadgeSlider';
import BlockContent from '@sanity/block-content-to-react';

interface Props {
  title?: string;
  body?: unknown;
  badges: IBadge[];
}

const Highlight: React.FC = (props) => (
  <span className="not-italic text-primary">{props.children}</span>
);

const MainSlider: React.FC<Props> = ({ title, body, badges }) => {
  console.log({ badges });
  return (
    <section className="flex flex-col justify-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing bg-gradient-to-b from-blue-200 via-white-200 to-blue-200 lg:to-white-300">
      <h2 className="max-w-full mx-auto mb-10 text-4xl font-semibold leading-9 text-center text-gray lg:text-5xl lg:leading-14 w-6xl">
        {title}
      </h2>
      <BlockContent
        blocks={body}
        renderContainerOnSingleChild
        className="max-w-full mx-auto mb-12 text-xl font-semibold text-center text-gray lg:text-2xl w-5xl"
        serializers={{
          marks: {
            em: Highlight
          }
        }}
      />
      <BadgeSlider items={badges} />
    </section>
  );
};

export default MainSlider;
