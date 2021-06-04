import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import SimpleBlockContent from '@components/SimpleBlockContent';
import { ISanityAboutUsItem } from 'src/types/about-us';

interface Props {
  data: ISanityAboutUsItem;
}

const FAQ: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const summaryRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    summaryRef?.current?.addEventListener('toggle', () => {
      setIsOpen(summaryRef.current?.open || false);
    });
  }, []);

  return (
    <details ref={summaryRef} className="mb-6 last:mb-0" id={data.id}>
      <summary
        className={clsx(
          'relative flex justify-between p-5 md:px-12 md:py-10 bg-green-200 rounded hover:bg-green-300',
          {
            'rounded-b-none': isOpen,
            'bg-green-300': isOpen
          }
        )}
      >
        <span className="block text-4xl font-bold text-white md:text-6xl">
          {data.title}
        </span>
        <span className="text-4xl text-white material-icons-round md:text-6xl">
          {isOpen ? 'expand_more' : 'chevron_right'}
        </span>
      </summary>
      <div
        className={clsx(
          'px-5 md:px-20 pb-16 text-white bg-green-200 rounded rounded-t-none',
          {
            'bg-green-300': isOpen
          }
        )}
      >
        <SimpleBlockContent
          className="text-lg text-white lg:text-xl"
          blocks={data._rawContent}
        />
      </div>
    </details>
  );
};

export default FAQ;
