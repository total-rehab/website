import { sentenceCase } from 'change-case';
import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { Button } from './Button';

type TableProps = {
  data: Record<string, ReactNode>[];
  className?: string;
};

export const Table: FC<TableProps> = ({ data, className }: TableProps) => {
  const keys = Object.keys(data[0] ?? {});

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-100 border border-gray-300">
          <tr>
            {keys.map((key, i) => (
              <th
                key={key}
                scope="col"
                className={cn(
                  'px-6 py-3',
                  i === 0 ? 'text-left' : 'text-center',
                )}>
                {sentenceCase(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={JSON.stringify(item)}
              className="bg-white border border-gray-300">
              {keys.map((key, i) => (
                <td
                  key={key}
                  className={cn(
                    'px-6 py-4',
                    i === 0 ? 'text-left' : 'text-center',
                  )}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
