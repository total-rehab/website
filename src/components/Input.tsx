import cn from 'classnames';
import { FC } from 'react';

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  type = 'text',
}: InputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-1 font-medim text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      disabled={disabled}
      className={cn(
        'border border-gray-400 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
        disabled ? 'bg-gray-150 cursor-not-allowed' : 'bg-white',
      )}
      placeholder={placeholder}
      required={required}
    />
  </div>
);
