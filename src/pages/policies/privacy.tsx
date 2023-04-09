import { GetStaticProps, NextPage } from 'next';
import { getSettings } from '../../queries';
import { PolicyPage } from '../../components/PolicyPage';

type PrivacyPageProps = {
  content: string;
};

const PrivacyPage: NextPage<PrivacyPageProps> = ({
  content,
}: PrivacyPageProps) => <PolicyPage title="Privacy Policy" content={content} />;

export const getStaticProps: GetStaticProps<PrivacyPageProps> = async () => {
  const { privacyPolicy } = await getSettings();

  return {
    props: {
      content: privacyPolicy,
    },
  };
};

export default PrivacyPage;
