import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

interface Props {
  className?: string;
  id: string;
  label: string;
  minLength?: number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
}

const TextArea: React.FC<Props> = ({
  className,
  id,
  label,
  minLength,
  onChange,
  placeholder,
  required,
  value
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event?.currentTarget?.value || '');
  };

  return (
    <div className={clsx('w-full', className)}>
      <label htmlFor={id} className="block mb-2 font-bold text-gray">
        {label}
      </label>
      <textarea
        id={id}
        className={
          'w-full px-3 py-3 bg-white border rounded-md border-beige-500'
        }
        rows={5}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
      />
    </div>
  );
};

export default TextArea;
