import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

interface Props {
  className?: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  required?: boolean;
  value: string;
}

const InputSelect: React.FC<Props> = ({
  className,
  id,
  label,
  onChange,
  options,
  placeholder,
  required,
  value
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.currentTarget?.value || '');
  };

  return (
    <div className={clsx('w-full', className)}>
      <label htmlFor={id} className="block mb-2 font-bold text-gray">
        {label}
      </label>
      <select
        id={id}
        className={
          'w-full bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 border-2 border-gray-300'
        }
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
