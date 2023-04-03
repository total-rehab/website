import { sentenceCase } from 'change-case';
import cn from 'classnames';
import { ReactNode } from 'react';

type AlertProps = {
  type: 'error' | 'success' | 'warning' | 'info';
  className?: string;
  children?: ReactNode;
};

export const Alert = ({ type, className, children }: AlertProps) => {
  const typeClassNames: Record<AlertProps['type'], string> = {
    error: 'text-red-800 bg-red-50',
    success: 'text-green-800 bg-green-50',
    warning: 'text-yellow-800 bg-yellow-50',
    info: 'text-blue-800 bg-blue-50',
  };

  return (
    <div
      className={cn(
        'p-4 mb-4 text-sm rounded-lg',
        typeClassNames[type],
        className,
      )}
      role="alert">
      <p className="font-bold mb-2">{sentenceCase(type)}</p>
      <p>{children}</p>
    </div>
  );
};
