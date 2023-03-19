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
      <div className="w-[240px]">
        <Image
          alt=""
          src="/images/squat-phone.png"
          width={1080}
          height={2458}
          sizes="240px"
        />
      </div>
    }>
    <UkcaBar />
  </Page>
);

export default BlogPage;
