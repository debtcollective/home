import React from 'react';
import Tabs from '@components/Tabs';

const FAQ = () => {
  const getTabItems = () => {
    return [
      {
        title: 'Dues',
        subtitle: 'What does the money go towards?',
        component: <p>Dues tab content</p>
      },
      {
        title: 'Progress',
        subtitle: 'What has been accomplished so far?',
        component: <p>Progress tab content</p>
      },
      {
        title: 'Resources',
        subtitle: 'What do I get from becoming a member?',
        component: <p>Resources tab content</p>
      },
      {
        title: 'Collective',
        subtitle: 'How does joining help other debtors? ',
        component: <p>Collective tab content</p>
      }
    ];
  };

  return (
    <section
      id="faq"
      className="lg:min-h-screen p-screen-spacing lg:p-desktop-screen-spacing"
      style={{
        background:
          'linear-gradient(180deg, #DBF8FF 0.85%, #F6FAF8 61.2%, #FCFBF7 80.89%)'
      }}
    >
      <h2 className="text-center mb-4 text-4xl leading-9 font-black text-gray lg:text-5xl lg:leading-14">
        Frequently Asked Questions
      </h2>
      <Tabs items={getTabItems()} />
    </section>
  );
};

export default FAQ;
