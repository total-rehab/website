import { ApiComponents } from '@jambff/oac';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../../components/website/Card';
import { CardGrid } from '../../components/website/CardGrid';
import { Container } from '../../components/website/Container';
import { DownloadGuide } from '../../components/website/DownloadGuide';
import { Page } from '../../components/website/Page';
import { Paginator } from '../../components/website/Paginator';
import { UkcaBar } from '../../components/website/UkcaBar';
import { getPlans } from '../../queries';

type ProgramsPageProps = {
  plans: ApiComponents['Plan'][];
  page: number;
  totalPages: number;
};

const PER_PAGE = 12;

const ProgramsPage: NextPage<ProgramsPageProps> = ({
  plans,
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
        {plans.map((plan) => (
          <Card
            key={plan.id}
            title={plan.title}
            image={plan.thumbnailImage}
            href={`/programs/${plan.id}`}
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

export const getServerSideProps: GetServerSideProps<
  ProgramsPageProps
> = async ({ query }) => {
  const page = Number(query.page ?? 1);
  const offset = (page - 1) * PER_PAGE;
  const { items: plans, total } = await getPlans({
    query: { limit: PER_PAGE, offset },
  });

  const totalPages = Math.ceil(total / PER_PAGE);

  return {
    props: {
      page,
      totalPages,
      plans,
    },
  };
};

export default ProgramsPage;
