import type { FC } from 'react';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';

export const SocialLinks: FC = () => (
  <div className="text-white space-x-4">
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
