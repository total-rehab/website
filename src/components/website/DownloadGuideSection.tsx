import Image from 'next/image';
import type { ComponentType, FC, ReactNode } from 'react';
import HowToReg from '@mui/icons-material/HowToReg';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import LibraryAdd from '@mui/icons-material/LibraryAdd';
import { SvgIconProps } from '@mui/material';
import { Container } from './Container';

type DownloadGuideSectionProps = {
  Icon: ComponentType<SvgIconProps>;
  title: string;
  text: string;
  children?: ReactNode;
  showGuideLine?: boolean;
};

export const DownloadGuideSection: FC<DownloadGuideSectionProps> = ({
  Icon,
  title,
  text,
  children,
  showGuideLine,
}: DownloadGuideSectionProps) => (
  <section className="relative">
    {showGuideLine && (
      <div className="absolute h-[85%] left-[25px] top-[90px] border-dotted border-l-[10px] border-gray-400" />
    )}
    <div className="flex items-center mb-3">
      <Icon className="mr-4 text-primary-regular" sx={{ fontSize: 60 }} />
      <h2 className="text-2xl lg:text-3xl font-medium">{title}</h2>
    </div>
    <div className="flex">
      <div className="min-w-[60px] mr-4" />
      <div>
        <p className="text-xl tracking-wide md:tracking-wide mb-5">{text}</p>
        {children}
      </div>
    </div>
  </section>
);
