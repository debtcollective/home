import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

interface Props {
  className?: string;
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: {
    label: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
  }[];
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
}) => (
  <div className={clsx('w-full', className)}>
    <label htmlFor={id} className="block mb-2 font-bold text-gray">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        className={
          'w-full px-3 py-3 bg-white border rounded-md border-beige-500 appearance-none'
        }
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
      <span
        className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none material-icons"
        style={{ display: 'flex' }}
      >
        expand_more
      </span>
    </div>
  </div>
);

export default InputSelect;
