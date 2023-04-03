import { FC } from 'react';

type SelectInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: { label: string; value: string | number }[];
};

export const SelectInput: FC<SelectInputProps> = ({
  label,
  name,
  placeholder,
  required,
  options,
}: SelectInputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-1 font-medim text-gray-900 dark:text-white">
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="bg-white border border-gray-400 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      required={required}>
      {options.map((optionItem) => (
        <option value={optionItem.value} key={optionItem.value}>
          {optionItem.label}
        </option>
      ))}
    </select>
  </div>
);
