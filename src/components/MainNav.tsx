import { FC, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import ExportedImage from 'next-image-export-optimizer';
import { MainNavLinks } from './MainNavLinks';

type MainNavProps = {
  className?: string;
};

export const MainNav: FC<MainNavProps> = ({ className }: MainNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-on-surface-regular">
      <div className="w-full container mx-auto px-6 pt-6 lg:pb-6">
        <div className="relative">
          <button
            type="button"
            aria-label="Toggle main menu"
            className={cn(
              'tham tham-e-squeeze tham-w-6 lg:hidden absolute right-0 top-[8px]',
              isMobileMenuOpen ? 'tham-active' : '',
            )}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}>
            <div className="tham-box">
              <div className="tham-inner bg-white" />
            </div>
          </button>
          <nav
            className={cn(
              'flex flex-col lg:flex-row justify-between items-center flex-1',
              className,
            )}
            aria-label="Main Navigation">
            <Link href="/">
              <ExportedImage
                alt="Total Rehab logo"
                src="/images/total-rehab-logo.png"
                className="pr-4"
                width={240}
                height={20}
                sizes="240px"
              />
            </Link>
            <MainNavLinks
              className={cn(
                'lg:h-auto',
                isMobileMenuOpen ? 'h-[220px]' : 'h-[0px]',
              )}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
