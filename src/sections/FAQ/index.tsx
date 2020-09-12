import React from 'react';
import Tabs from '@components/Tabs';
import Dues from './Dues';
import Progress from './Progress';
import Resources from './Resources';
import Collective from './Collective';

const FAQ = () => {
  const getTabItems = () => {
    return [
      {
        title: 'Dues',
        subtitle: 'What does the money go towards?',
        component: <Dues />
      },
      {
        title: 'Progress',
        subtitle: 'What has been accomplished so far?',
        component: <Progress />
      },
      {
        title: 'Resources',
        subtitle: 'What do I get from becoming a member?',
        component: <Resources />
      },
      {
        title: 'Collective',
        subtitle: 'How does joining help other debtors? ',
        component: <Collective />
      }
    ];
  };

  return (
    <section
      id="faq"
      className="min-h-section-size px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
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
