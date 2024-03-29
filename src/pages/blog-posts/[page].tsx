import { ApiComponents } from '@jambff/oac';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ExportedImage from 'next-image-export-optimizer';
import { Card } from '../../components/Card';
import { CardGrid } from '../../components/CardGrid';
import { Container } from '../../components/Container';
import { Page } from '../../components/Page';
import { Paginator } from '../../components/Paginator';
import { UkcaBar } from '../../components/UkcaBar';
import { getBlogPosts } from '../../queries';
import { getStaticPathsFromList } from '../../static';

type BlogPostsPageProps = {
  items: ApiComponents['BlogPost'][];
  page: number;
  totalPages: number;
};

const PER_PAGE = 9;

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({
  items,
  page,
  totalPages,
}: BlogPostsPageProps) => (
  <Page
    title="Injury resources"
    description="Explore our collection of insightful blog posts on injury and recovery"
    headerImage={
      <ExportedImage
        alt=""
        src="/images/squat-phone.png"
        width={240}
        height={547}
        sizes="240px"
      />
    }>
    <Container className="mt-6 mb-6 lg:mt-12 lg:mb-12">
      <CardGrid>
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.thumbnailImage}
            href={`/blog-post/${item.id}`}
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

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticPathsFromList('BlogPost', PER_PAGE);

export const getStaticProps: GetStaticProps<BlogPostsPageProps> = async ({
  params,
}) => {
  const page = Number(params?.page ?? 1);
  const offset = (page - 1) * PER_PAGE;
  const { items, total } = await getBlogPosts({
    query: { limit: PER_PAGE, offset },
  });

  const totalPages = Math.ceil(total / PER_PAGE);

  return {
    props: {
      page,
      totalPages,
      items,
    },
  };
};

export default BlogPostsPage;
