import React from 'react';
import NewsLetter from '@components/Footer/SubscribeNewsletter';

interface Props {
  hideNewsletter?: boolean;
}

const Footer: React.FC<Props> = ({ hideNewsletter }) => {
  return (
    <section className="bg-gray">
      <div className="mx-auto w-8xl p-6">
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
