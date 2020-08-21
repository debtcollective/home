import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

export enum InputType {
  text = 'text',
  email = 'email'
}

interface Props {
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type: InputType;
  value: string;
  className?: string;
}

const Input: React.FC<Props> = ({
  id,
  onChange,
  placeholder,
  type,
  value,
  className
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.currentTarget?.value || '');
  };

  return (
    <input
      id={id}
      type={type}
      className={classnames(
        'bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100',
        className
      )}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
