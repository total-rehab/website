import { GetStaticProps, NextPage } from 'next';
import { getSettings } from '../../queries';
import { PolicyPage } from '../../components/PolicyPage';

type TermsPageProps = {
  content: string;
};

const TermsPage: NextPage<TermsPageProps> = ({ content }: TermsPageProps) => (
  <PolicyPage title="Terms and Conditions" content={content} />
);

export const getStaticProps: GetStaticProps<TermsPageProps> = async () => {
  const { termsAndConditions } = await getSettings();

  return {
    props: {
      content: termsAndConditions,
    },
  };
};

export default TermsPage;
