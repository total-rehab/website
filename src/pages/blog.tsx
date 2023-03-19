import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/website/Header';
import { Page } from '../components/website/Page';
import { UkcaBar } from '../components/website/UkcaBar';

const TITLE = 'Injury resources';
const DESCRIPTION =
  'Explore our collection of insightful blog posts on injury and recovery';

const BlogPage: NextPage = () => (
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
    <UkcaBar />
  </Page>
);

export default BlogPage;
