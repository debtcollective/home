import React from 'react';
import NewsLetter from '@components/Footer/SubscribeNewsletter';

interface Props {
  hideNewsletter?: boolean;
}

const Footer: React.FC<Props> = ({ hideNewsletter }) => {
  return (
    <section className="bg-gray px-x-screen-spacing py-y-screen-spacing lg:px-desktop-screen-spacing lg:py-12">
      <div className="mx-auto max-w-8xl">
        {!hideNewsletter && (
          <>
            <NewsLetter />
            <hr className="w-full border-gray-100" />
          </>
        )}
      </div>
      <dc-footer />
    </section>
  );
};

export default Footer;
