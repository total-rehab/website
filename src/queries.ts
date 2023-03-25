import {
  GetBlogPostOptions,
  GetBlogPostResponse,
  GetBlogPostsOptions,
  GetBlogPostsResponse,
} from '@jambff/oac';
import { totalRehabApi } from './total-rehab-api';

const blogPostIncludes = {
  heroImage: true,
  thumbnailImage: true,
};

export const getBlogPost = (
  opts: GetBlogPostOptions,
): Promise<GetBlogPostResponse> =>
  totalRehabApi.getBlogPost({
    ...opts,
    query: {
      ...opts?.query,
      include: blogPostIncludes,
    },
  });

export const getBlogPosts = (
  opts?: GetBlogPostsOptions,
): Promise<GetBlogPostsResponse> =>
  totalRehabApi.getBlogPosts({
    ...opts,
    query: {
      ...opts?.query,
      include: blogPostIncludes,
    },
  });
