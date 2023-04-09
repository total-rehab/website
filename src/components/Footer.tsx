import type { FC } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import ExportedImage from 'next-image-export-optimizer';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Container } from './Container';
import { NavLink } from './NavLink';
import { SocialLinks } from './SocialLinks';

export const Footer: FC = () => {
  const { asPath } = useRouter();
  const isDashboard = asPath.startsWith('/practitioner');

  if (isDashboard) {
    return (
      <footer className="bg-on-surface-base py-6 px-8">
        <div className="items-center flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
            <SocialLinks />
            <ul className="flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide mt-8 md:mt-0">
              <li>
                <NavLink href="/policies/privacy">Privacy</NavLink>
              </li>
              <li>
                <NavLink href="mailto:support@total-rehab.co.uk">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-on-surface-base py-6">
      <Container>
        <div className="items-center flex flex-col items-center">
          {!isDashboard && (
            <ExportedImage
              className="mb-6"
              src="/images/total-rehab-logo.png"
              alt="Total Rehab logo"
              width={250}
              height={35}
              sizes="250px"
            />
          )}
          <SocialLinks />
          <ul className="flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide">
            <li>
              <NavLink href="/blog-posts/1">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/policies/privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink href="/policies/terms">Terms</NavLink>
            </li>
            <li>
              <NavLink href="mailto:support@total-rehab.co.uk">Contact</NavLink>
            </li>
          </ul>
        </div>
        <p className="text-white md:text-xl mt-6 lg:mt-8 md:w-[75%] lg:w-[50%] text-center mx-auto">
          Before starting any rehabilitation program, it&apos;s important to
          seek advice from a healthcare professional to ensure it&apos;s
          suitability for your condition, avoiding potential harm and setbacks.
        </p>
      </Container>
    </footer>
  );
};
