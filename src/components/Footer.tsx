import type { FC } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import ExportedImage from 'next-image-export-optimizer';
import { Container } from './Container';
import { NavLink } from './NavLink';

export const Footer: FC = () => (
  <footer className="bg-on-surface-base pt-6 pb-8">
    <Container>
      <div className="items-center flex flex-col items-center">
        <ExportedImage
          className="mb-6"
          src="/images/total-rehab-logo.png"
          alt="Total Rehab logo"
          width={250}
          height={35}
          sizes="250px"
        />
        <div className="text-white mb-8 space-x-4">
          <a
            href="https://www.facebook.com/totalrehabapp"
            aria-label="Total Rehab Facebook page">
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/total_rehab_app"
            aria-label="Total Rehab Instagram page">
            <Instagram />
          </a>
        </div>
        <ul className="flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide">
          <li>
            <NavLink href="/blog-posts/1">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/policies/privacy">Privacy</NavLink>
          </li>
          <li>
            <NavLink href="mailto:support@total-rehab.co.uk">Contact</NavLink>
          </li>
        </ul>
      </div>
      <p className="text-white text-xl mt-6 lg:mt-8 md:w-[75%] lg:w-[50%] text-center mx-auto">
        Before starting any rehabilitation program, it&apos;s important to seek
        advice from a healthcare professional to ensure it&apos;s suitability
        for your condition, avoiding potential harm and setbacks.
      </p>
    </Container>
  </footer>
);
