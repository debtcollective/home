import React from 'react';
import classnames from 'clsx';

interface IMenuItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  items: IMenuItem[];
  className?: string;
}

const FooterMenuSection: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={classnames('mr-16', className)}>
      <p className="text-gray-300 uppercase font-semibold text-base mb-6">
        {title}
      </p>
      <ul>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li
              key={item.label}
              className={classnames(
                'text-white',
                'capitalize',
                'font-semibold',
                {
                  'mb-6': !isLastItem
                }
              )}
            >
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenuSection;
