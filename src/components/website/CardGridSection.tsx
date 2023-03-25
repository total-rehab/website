import { ApiComponents } from '@jambff/oac';
import Link from 'next/link';
import { FC } from 'react';
import { Card } from './Card';
import { CardGrid } from './CardGrid';
import { Container } from './Container';

type CardGridSectionProps = {
  title: string;
  baseUrl: string;
  viewAllText: string;
  items: {
    id: number;
    title: string;
    thumbnailImage?: ApiComponents['Media'];
  }[];
};

export const CardGridSection: FC<CardGridSectionProps> = ({
  title,
  baseUrl,
  items,
  viewAllText,
}: CardGridSectionProps) => (
  <Container className="pt-12 pb-12">
    <h2 className="text-2xl lg:text-3xl tracking-wide lg:tracking-wide font-medium mb-6">
      {title}
    </h2>
    <CardGrid>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.thumbnailImage}
          href={`${baseUrl}/${item.id}`}
        />
      ))}
    </CardGrid>
    <div className="mt-6 flex justify-end hover:underline underline-offset-4">
      <Link href={baseUrl} className="text-xl font-medium">
        {viewAllText} &gt;
      </Link>
    </div>
  </Container>
);
