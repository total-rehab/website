import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { NavLink } from './NavLink';

export const Footer: FC = () => (
  <footer className="bg-on-surface-base pt-6 pb-8">
    <Container>
      <div className="items-center flex flex-col items-center">
        <Image
          className="mb-6 lg:mb-8"
          src="/images/total-rehab-logo.png"
          alt="Total Rehab logo"
          width={250}
          height={35}
          sizes="250px"
        />
        <ul className="flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide">
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/privacy">Privacy</NavLink>
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
