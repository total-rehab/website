import type { FC } from 'react';
import { Container } from './Container';
import { Page } from './Page';

type PolicyPageProps = {
  title: string;
  content?: string;
};

export const PolicyPage: FC<PolicyPageProps> = ({
  title,
  content,
}: PolicyPageProps) => (
  <Page hideHeader title={title}>
    <Container className="mt-8 mb-8">
      <div className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">{title}</h1>
        {content && (
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </Container>
  </Page>
);
