import { ReactNode } from 'react';
import { MainNav } from './MainNav';
import { Meta, MetaProps } from './Meta';

type PageProps = {
  children: ReactNode;
  meta: MetaProps;
};

export const Page = ({ children, meta }: PageProps) => (
  <>
    <MainNav activeClassName="text-gray-500 font-bold" />
    <Meta {...meta} />
    {children}
  </>
);
