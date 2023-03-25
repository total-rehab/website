import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainNav } from './MainNav';
import { Meta, MetaProps } from './Meta';

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  meta?: MetaProps;
  headerImage?: ReactNode;
  hideHeader?: boolean;
};

export const Page = ({
  title,
  description,
  children,
  meta,
  headerImage,
  hideHeader,
}: PageProps) => (
  <div className="text-on-surface-base">
    <MainNav />
    <Meta
      title={meta?.title || title}
      description={meta?.description || description}
      image={meta?.image}
    />
    {!hideHeader && (
      <Header title={title} description={description} image={headerImage} />
    )}
    {children}
    <Footer />
  </div>
);
