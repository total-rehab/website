import { ApiComponents } from '@jambff/oac';
import { NextPage } from 'next';
import Image from 'next/image';
import { BREAKPOINT_LG, BREAKPOINT_XL } from '../../breakpoints';
import { Container } from './Container';
import { Page } from './Page';
import { UkcaBar } from './UkcaBar';

type PostPageProps = {
  title: string;
  heroImage?: ApiComponents['Media'];
  content?: string;
};

export const PostPage: NextPage<PostPageProps> = ({
  title,
  heroImage,
  content,
}: PostPageProps) => (
  <Page
    title={title}
    headerImage={
      heroImage ? (
        <Image
          alt=""
          className="rounded-lg"
          src={heroImage.src}
          width={500}
          height={500 * 0.667}
          sizes={`(min-width: ${BREAKPOINT_LG}px) 390px, (min-width: ${BREAKPOINT_XL}px) 500px, 0px`}
        />
      ) : null
    }>
    <Container className="mt-6 mb-6 lg:mt-12 lg:mb-12">
      {content && (
        <div
          className="prose lg:prose-xl mx-auto"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </Container>
    <UkcaBar />
  </Page>
);
