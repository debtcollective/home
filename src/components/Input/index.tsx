import clsx from 'clsx';
import React, { ChangeEvent } from 'react';
import classnames from 'clsx';

export enum InputType {
  text = 'text',
  email = 'email'
}

interface Props {
  className?: string;
  id: string;
  name?: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type: InputType;
  value: string;
  variant?: string;
}

const Input: React.FC<Props> = ({
  className,
  id,
  label,
  onChange,
  placeholder,
  required,
  type,
  value,
  variant
}) => {
  const cn: string =
    variant === 'dark' ? 'text-white bg-transparent' : 'text-gray bg-transparent';
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.currentTarget?.value || '');
  };

  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className={classnames(cn, 'block mb-2 font-semibold text-base')}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={classnames(
          cn,
          'w-full rounded-md px-4 py-3 border-2 border-green-500'
        )}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
