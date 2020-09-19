import React, { useRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Input } from './DonationWizard';

export interface Props {
  name: string;
  options: Array<number | 'other'>;
  defaultChecked?: number;
  suffix?: string;
}

const currencyFormat = (
  number: number,
  { currency } = { currency: 'USD' }
): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency
  })
    .format(number)
    .replace(/\.00/g, '');
};

const DonationQuickOption: React.FC<Props> = ({
  options,
  name,
  defaultChecked,
  suffix = 'USD'
}) => {
  const groups = Math.ceil(options.length / 3);
  const rows = Array(groups)
    .fill('')
    .map((_, i) => options.slice(i * 3, (i + 1) * 3));

  const inputOther = useRef<HTMLInputElement>(null);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id.includes('other') && inputOther.current) {
      inputOther.current.focus();
    }
  };

  return (
    <QuickOptionContainer>
      {rows.map((row, i) => (
        <QuickOptionRow key={`row-${i}`}>
          {row.map((option) => {
            return (
              <QuickOption key={`key-${option}`}>
                <input
                  defaultChecked={option === defaultChecked}
                  id={`option-${option}`}
                  name={name}
                  type="radio"
                  value={option}
                  onChange={handleOnChange}
                />
                {option === 'other' && (
                  <Input
                    className="text-sm"
                    id="option-other-input"
                    min="5"
                    name="other"
                    placeholder="Other"
                    ref={inputOther}
                    step="5"
                    title="Other"
                    type="number"
                  />
                )}
                <label className="text-sm" htmlFor={`option-${option}`}>
                  {option === 'other' ? `Other amount` : currencyFormat(option)}{' '}
                  <span className="text-tiny text-gray-300 normal-case">
                    {option === 'other' ? '' : suffix}
                  </span>
                </label>
              </QuickOption>
            );
          })}
        </QuickOptionRow>
      ))}
    </QuickOptionContainer>
  );
};

export default DonationQuickOption;

const QuickOptionRow = styled.div`
  ${tw`flex flex-wrap justify-between -ml-2 mt-2`}
`;

const QuickOption = styled.div`
  ${tw`flex w-1/3 last:flex-1 ml-2`}

  label {
    ${tw`
      bg-white-100
      block
      border
      border-beige-500
      cursor-pointer
      focus:border-blue
      focus:outline-none
      py-2 px-3
      rounded-md
      text-center
      w-full
    `}
  }

  input {
    ${tw`appearance-none`}

    &:checked + label {
      ${tw`bg-blue border-blue`}
    }
  }

  #option-other {
    &-input {
      ${tw`hidden mt-0`}
    }

    &:checked ~ label {
      ${tw`hidden`}
    }

    &:checked ~ #option-other-input {
      ${tw`block`}
    }
  }
`;

const QuickOptionContainer = styled.div`
  ${QuickOptionRow}:firt-child {
    ${tw`mt-0`}
  }
`;
