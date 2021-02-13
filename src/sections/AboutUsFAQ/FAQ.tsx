import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const summaryRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    summaryRef?.current?.addEventListener('toggle', () => {
      setIsOpen(summaryRef.current?.open || false);
    });
  }, []);

  return (
    <details ref={summaryRef} className="mb-6 last:mb-0">
      <summary
        className={clsx(
          'relative flex justify-between px-12 py-10 bg-green-200 rounded hover:bg-green-300',
          {
            'rounded-b-none': isOpen,
            'bg-green-300': isOpen
          }
        )}
      >
        <span className="block text-4xl font-bold text-white md:text-6xl">
          What is <br /> the Debt Collective?
        </span>
        <span
          className="text-white material-icons"
          style={{
            fontSize: '5rem'
          }}
        >
          {isOpen ? 'expand_more' : 'chevron_right'}
        </span>
      </summary>
      <div
        className={clsx(
          'px-20 pb-16 text-white bg-green-200 rounded rounded-t-none',
          {
            'bg-green-300': isOpen
          }
        )}
      >
        <pre className="font-sans text-white">Some content</pre>
      </div>
    </details>
  );
};

export default FAQ;
