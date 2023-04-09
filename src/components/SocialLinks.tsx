import type { FC } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import classNames from 'classnames';

type SocialLinksProps = {
  className?: string;
};

export const SocialLinks: FC<SocialLinksProps> = ({
  className,
}: SocialLinksProps) => (
  <div className={classNames('text-white space-x-4', className)}>
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
);
