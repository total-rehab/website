import NextHead from 'next/head';
import { useRouter } from 'next/router';

const SITE_TITLE = 'Total Rehab';
const CANONICAL_BASE_URL = 'https://www.total-rehab.co.uk';

export type MetaProps = {
  title: string;
  description?: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const Meta = ({ title, description, image }: MetaProps) => {
  const fullTitle = [title, SITE_TITLE].filter((x) => x).join(' | ');
  const route = useRouter();
  const canonicalUrl = `${CANONICAL_BASE_URL}${route.pathname}`;

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <link rel="canonical" href={canonicalUrl} />
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta name="og:title" content={title} />
      {description && <meta name="og:description" content={description} />}
      <meta name="og:site_name" content={SITE_TITLE} />
      <meta name="og:url" content={canonicalUrl} />
      <meta name="og:image" content={image.src} />
      <meta name="og:image:width" content={String(image.width)} />
      <meta name="og:image:height" content={String(image.width)} />
    </NextHead>
  );
};
