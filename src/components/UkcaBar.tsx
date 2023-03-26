import type { FC } from 'react';
import cn from 'classnames';
import ExportedImage from 'next-image-export-optimizer';
import { Container } from './Container';

type UkcaBarProps = {
  className?: string;
};

export const UkcaBar: FC<UkcaBarProps> = ({ className }: UkcaBarProps) => (
  <div className={cn('bg-primary-regular', className)}>
    <Container className="flex items-center justify-center lg:justify-end">
      <ExportedImage
        alt=""
        src="/images/ukca-logo.png"
        width={70}
        height={70}
        sizes="70px"
      />
      <p className="ml-6 text-white font-medium text-lg">
        Registered Medical Device
      </p>
    </Container>
  </div>
);
