import { ApiComponents } from '@jambff/oac';
import Link from 'next/link';
import type { FC } from 'react';
import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
} from '../../breakpoints';
import { RemoteImage } from './RemoteImage';

type CardProps = {
  title?: string;
  image?: ApiComponents['Media'];
  href: string;
};

export const Card: FC<CardProps> = ({ title, image, href }: CardProps) => (
  <Link
    href={href}
    className="border border-gray-200 rounded-xl overflow-hidden shadow bg-white">
    <RemoteImage
      aspectRatio={0.667}
      maxWidth={300}
      image={image}
      sizes={[
        `(min-width: ${BREAKPOINT_SM}px) 290px`,
        `(min-width: ${BREAKPOINT_MD}px) 350px`,
        `(min-width: ${BREAKPOINT_LG}px) 315px`,
        `(min-width: ${BREAKPOINT_XL}px) 360px`,
        'calc(100vw - 3rem)',
      ].join(', ')}
    />
    <div className="px-3 py-2">
      <h3 className="text-lg lg:text-xl tracking-wide lg:tracking-wide font-medium">
        {title}
      </h3>
    </div>
  </Link>
);
