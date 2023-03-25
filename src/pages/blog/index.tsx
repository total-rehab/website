import { ApiComponents } from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../../components/website/Card';
import { CardGrid } from '../../components/website/CardGrid';
import { Container } from '../../components/website/Container';
import { Page } from '../../components/website/Page';
import { Paginator } from '../../components/website/Paginator';
import { UkcaBar } from '../../components/website/UkcaBar';
import { getBlogPosts } from '../../queries';

type BlogPostsPageProps = {
  blogPosts: ApiComponents['BlogPost'][];
  page: number;
  totalPages: number;
};

const PER_PAGE = 9;

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({
  blogPosts,
  page,
  totalPages,
}: BlogPostsPageProps) => (
  <Page
    title="Injury resources"
    description="Explore our collection of insightful blog posts on injury and recovery"
    headerImage={
      <Image
        alt=""
        src="/images/squat-phone.png"
        width={240}
        height={547}
        sizes="240px"
      />
    }>
    <Container className="mt-6 mb-6 lg:mt-12 lg:mb-12">
      <CardGrid>
        {blogPosts.map((blogPost) => (
          <Card
            key={blogPost.id}
            title={blogPost.title}
            image={blogPost.thumbnailImage}
            href={`/blog/${blogPost.id}`}
          />
        ))}
      </CardGrid>
      <Paginator
        className="mt-12 flex justify-center"
        page={page}
        totalPages={totalPages}
      />
    </Container>
    <UkcaBar />
  </Page>
);

export const getServerSideProps: GetServerSideProps<
  BlogPostsPageProps
> = async ({ query }) => {
  const page = Number(query.page ?? 1);
  const offset = (page - 1) * PER_PAGE;
  const { items: blogPosts, total } = await getBlogPosts({
    query: { limit: PER_PAGE, offset },
  });

  const totalPages = Math.ceil(total / PER_PAGE);

  return {
    props: {
      page,
      totalPages,
      blogPosts,
    },
  };
};

export default BlogPostsPage;
