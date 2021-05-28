import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

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
}

const Input: React.FC<Props> = ({
  className,
  id,
  label,
  onChange,
  placeholder,
  required,
  type,
  value
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.currentTarget?.value || '');
  };

  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className="block mb-2 text-base font-semibold text-gray"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={
          'w-full px-3 py-3 bg-white border rounded-md border-beige-500'
        }
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
