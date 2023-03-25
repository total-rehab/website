import { ApiComponents, GetPlanOptions } from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import { PostPage } from '../../components/website/PostPage';
import { getPlan } from '../../queries';

type PlanPageProps = {
  blogPost: ApiComponents['Plan'];
};

const PlanPage: NextPage<PlanPageProps> = ({ blogPost }: PlanPageProps) => (
  <PostPage {...blogPost} />
);

export const getServerSideProps: GetServerSideProps<
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
