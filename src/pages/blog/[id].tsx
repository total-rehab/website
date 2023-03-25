import { ApiComponents, GetBlogPostOptions } from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import { PostPage } from '../../components/website/PostPage';
import { getBlogPost } from '../../queries';

type BlogPostPageProps = {
  blogPost: ApiComponents['BlogPost'];
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  blogPost,
}: BlogPostPageProps) => <PostPage {...blogPost} />;

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
