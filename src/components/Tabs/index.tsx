import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';

interface ITabItem {
  title: string;
  subtitle?: string;
  component: ReactNode;
}

interface Props {
  items: ITabItem[];
}

const Tabs: React.FC<Props> = ({ items }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <ul className="flex my-20 overflow-x-scroll border-b-2 border-gray-500 items-stretch lg:px-32">
        {items.map((item, index) => {
          const isActive = index === currentTabIndex;

          return (
            <li
              key={item.title}
              onClick={() => setCurrentTabIndex(index)}
              className={classnames(
                'cursor-pointer select-none border-l-4 px-5 border-gray-500 min-w-3/4',
                {
                  'border-primary': isActive
                }
              )}
            >
              <h5
                className={classnames(
                  'text-primary text-xs font-bold leading-3',
                  {
                    'text-opacity-1': isActive,
                    'text-opacity-50': !isActive
                  }
                )}
              >
                {item.title}
              </h5>
              <h6
                className={classnames(
                  'mb-10 text-base leading-5 text-black-100 font-semibold mt-3',
                  {
                    'text-opacity-1': isActive,
                    'text-opacity-50': !isActive
                  }
                )}
              >
                {item.subtitle}
              </h6>
            </li>
          );
        })}
      </ul>
      {items[currentTabIndex].component}
    </>
  );
};

export default Tabs;
