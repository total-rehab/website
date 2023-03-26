import { GetStaticProps, NextPage } from 'next';

const AdminPage: NextPage = () => null;

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: 'https://admin.total-rehab.co.uk',
      permanent: false,
    },
  };
};

export default AdminPage;
