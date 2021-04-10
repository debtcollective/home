import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

interface Props {
  className?: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
}

const TextArea: React.FC<Props> = ({
  className,
  id,
  label,
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
          'w-full bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 border-2 border-gray-300'
        }
        rows={5}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextArea;
