import { ApiComponents, GetPlanOptions } from '@jambff/oac';
import { GetServerSideProps, GetStaticPaths, NextPage } from 'next';
import { PostPage } from '../../components/website/PostPage';
import { getPlan } from '../../queries';
import { getStaticPathsFrom } from '../../static';

type PlanPageProps = {
  blogPost: ApiComponents['Plan'];
};

const PlanPage: NextPage<PlanPageProps> = ({ blogPost }: PlanPageProps) => (
  <PostPage {...blogPost} />
);

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticPathsFrom('Plan');

export const getStaticProps: GetServerSideProps<
  PlanPageProps,
  GetPlanOptions['params']
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const blogPost = await getPlan({ params });

  return {
    props: {
      blogPost,
    },
  };
};

export default PlanPage;
