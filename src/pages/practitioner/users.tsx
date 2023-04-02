import { ApiComponents } from '@jambff/oac';
import { GetStaticProps, NextPage } from 'next';
import { Page } from '../../components/Page';
import { totalRehabApi } from '../../total-rehab-api';
import { DashboardLayout } from '../../components/DashboardLayout';

type DashboardPageProps = {
  products: ApiComponents['Product'][];
};

const ProductsPage: NextPage<DashboardPageProps> = ({
  products,
}: DashboardPageProps) => {
  return (
    <Page
      hideHeader
      title="Sign up"
      description="Sign up to the Total Rehab app">
      <DashboardLayout>List users</DashboardLayout>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<DashboardPageProps> = async () => {
  const products = await totalRehabApi.getProducts();

  // Sort products to put those with the lowest quantity first.
  const sortedProducts = products.items.sort((a, b) => a.quantity - b.quantity);

  return {
    props: {
      products: sortedProducts,
    },
  };
};

export default ProductsPage;
