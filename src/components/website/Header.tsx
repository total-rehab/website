import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { BREAKPOINT_LG, BREAKPOINT_SM } from '../../breakpoints';
import { Container } from './Container';

export type HeaderProps = {
  title: string;
  description?: string;
  image: ReactNode;
};

export const Header: FC<HeaderProps> = ({
  title,
  description,
  image,
}: HeaderProps) => (
  <header className="bg-on-surface-regular">
    <Container className="flex flex-wrap flex-col md:flex-row items-center text-white pb-8 pt-8 ">
      <div className="flex flex-col w-full lg:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <div className="mb-8 md:mb-10 lg:mb-16 xl:max-w-[80%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-left">
            {title}
          </h1>

          {description && (
            <p className="mt-6 leading-normal text-xl md:text-3xl text-center lg:text-left">
              {description}
            </p>
          )}
        </div>

        <div className="flex w-full justify-center lg:justify-start pb-6 md:pb-8 xl:pb-0 items-center md:items-left space-x-4">
          <a
            href="https://apps.apple.com/uk/app/total-rehab/id6446787979"
            className="w-[150px] sm:w-[200px] lg:w-[240px]">
            <Image
              alt="App Store logo"
              src="/images/app-store.svg"
              width={240}
              height={72}
              sizes={`(min-width: ${BREAKPOINT_SM}px) 200px, (min-width: ${BREAKPOINT_LG}px) 240px, 150px`}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=uk.co.totalrehab.app"
            className="w-[150px] sm:w-[200px] lg:w-[240px]">
            <Image
              alt="Google Play logo"
              src="/images/play-store.svg"
              width={240}
              height={72}
              sizes={`(min-width: ${BREAKPOINT_SM}px) 200px, (min-width: ${BREAKPOINT_LG}px) 240px, 150px`}
            />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-2/5 xl:w-2/5 mb-8 lg:mb-12 hidden lg:flex relative justify-center">
        {image}
      </div>
    </Container>
  </header>
);
