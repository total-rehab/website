import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type HeaderProps = {
  title: string;
  description?: string;
  descriptionClassName?: string;
  image: ReactNode;
};

export const Header: FC<HeaderProps> = ({
  title,
  description,
  descriptionClassName,
  image,
}: HeaderProps) => (
  <header className="bg-on-surface-regular">
    <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center text-white pb-8 pt-8 ">
      <div className="flex flex-col w-full lg:w-3/5 xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <div className="mb-8 md:mb-10 lg:mb-16 xl:max-w-[80%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-left">
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                'mt-6 leading-normal text-xl md:text-3xl text-center lg:text-left',
                descriptionClassName,
              )}>
              {description}
            </p>
          )}
        </div>

        <div className="flex w-full justify-center lg:justify-start pb-24 lg:pb-0 flex-col items-center md:items-left md:flex-row">
          <Link
            href="/"
            className="flex flex-1 md:pr-4 sm:flex-none mb-2 md:mb-0">
            <Image
              alt="App Store logo"
              src="images/app-store.svg"
              width={241}
              height={73}
              sizes="241px"
            />
          </Link>
          <a
            className="flex flex-1 sm:flex-none"
            href="https://play.google.com/store/apps/details?id=uk.co.totalrehab.app">
            <Image
              alt="Google Play logo"
              src="images/play-store.svg"
              width={241}
              height={73}
              sizes="241px"
            />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-2/5 xl:w-2/5 mb-8 lg:mb-12 hidden lg:flex relative justify-center">
        {image}
      </div>
    </div>
  </header>
);