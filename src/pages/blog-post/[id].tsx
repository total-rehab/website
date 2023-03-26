import { ApiComponents, GetBlogPostOptions } from '@jambff/oac';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PostPage } from '../../components/PostPage';
import { getBlogPost } from '../../queries';
import { getStaticPathsFrom } from '../../static';

type BlogPostPageProps = {
  blogPost: ApiComponents['BlogPost'];
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  blogPost,
}: BlogPostPageProps) => <PostPage {...blogPost} />;

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticPathsFrom('BlogPost');

export const getStaticProps: GetStaticProps<
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
