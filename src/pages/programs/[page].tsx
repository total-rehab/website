import { ApiComponents } from '@jambff/oac';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../../components/Card';
import { CardGrid } from '../../components/CardGrid';
import { Container } from '../../components/Container';
import { DownloadGuide } from '../../components/DownloadGuide';
import { Page } from '../../components/Page';
import { Paginator } from '../../components/Paginator';
import { UkcaBar } from '../../components/UkcaBar';
import { getPlans } from '../../queries';
import { getStaticPathsFromList } from '../../static';

type ProgramsPageProps = {
  items: ApiComponents['Plan'][];
  page: number;
  totalPages: number;
};

const PER_PAGE = 12;

const ProgramsPage: NextPage<ProgramsPageProps> = ({
  items,
  page,
  totalPages,
}: ProgramsPageProps) => (
  <Page
    title="Sports Injury and Post-Surgery Rehab Programs"
    description="Evidence based physiotherapy programs with you in mind"
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
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.thumbnailImage}
            href={`/program/${item.id}`}
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
    <DownloadGuide />
  </Page>
);

export const getStaticPaths: GetStaticPaths = async () =>
  getStaticPathsFromList('Plan', PER_PAGE);

export const getStaticProps: GetStaticProps<ProgramsPageProps> = async ({
  params,
}) => {
  const page = Number(params?.page ?? 1);
  const offset = (page - 1) * PER_PAGE;
  const { items, total } = await getPlans({
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

export default ProgramsPage;
