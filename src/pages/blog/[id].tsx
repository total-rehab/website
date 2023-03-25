import {
  ApiComponents,
  GetBlogPostOptions,
  GetBlogPostsOptions,
} from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
} from '../../breakpoints';
import { Card } from '../../components/website/Card';
import { CardGrid } from '../../components/website/CardGrid';
import { Container } from '../../components/website/Container';
import { Page } from '../../components/website/Page';
import { Paginator } from '../../components/website/Paginator';
import { RemoteImage } from '../../components/website/RemoteImage';
import { UkcaBar } from '../../components/website/UkcaBar';
import { getBlogPost, getBlogPosts } from '../../queries';

type BlogPostPageProps = {
  blogPost: ApiComponents['BlogPost'];
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  blogPost,
}: BlogPostPageProps) => (
  <Page
    title={blogPost.title}
    headerImage={
      blogPost.heroImage ? (
        <Image
          alt=""
          className="rounded-lg"
          src={blogPost.heroImage.src}
          width={500}
          height={500 * 0.667}
          sizes={`(min-width: ${BREAKPOINT_LG}px) 390px, (min-width: ${BREAKPOINT_XL}px) 500px, 0px`}
        />
      ) : null
    }>
    <Container className="mt-6 mb-6 lg:mt-12 lg:mb-12">
      {blogPost.content && (
        <div
          className="prose lg:prose-xl mx-auto"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      )}
    </Container>
    <UkcaBar />
  </Page>
);

export const getServerSideProps: GetServerSideProps<
  BlogPostPageProps,
  GetBlogPostOptions['params']
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const blogPost = await getBlogPost({ params });

  return {
    props: {
      blogPost,
    },
  };
};

export default BlogPostPage;
