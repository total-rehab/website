import { FC } from 'react';

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  required,
}: InputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-1 font-medim text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type="text"
      id={name}
      className="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      required={required}
    />
  </div>
);
