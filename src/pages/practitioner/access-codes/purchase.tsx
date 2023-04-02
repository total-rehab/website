import { ApiComponents } from '@jambff/oac';
import { GetStaticProps, NextPage } from 'next';
import { Page } from '../../../components/Page';
import { totalRehabApi } from '../../../total-rehab-api';
import { Product } from '../../../components/Product';
import { DashboardLayout } from '../../../components/DashboardLayout';

type AccessCodesPurchasePageProps = {
  products: ApiComponents['Product'][];
};

const AccessCodesPurchasePage: NextPage<AccessCodesPurchasePageProps> = ({
  products,
}: AccessCodesPurchasePageProps) => (
  <Page hideHeader title="Sign up" description="Sign up to the Total Rehab app">
    <DashboardLayout>
      <p className="text-xl mb-8">
        Purchase access codes to provide your patients with full access to all
        programs within the Total Rehab app.
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </DashboardLayout>
  </Page>
);

export const getStaticProps: GetStaticProps<
  AccessCodesPurchasePageProps
> = async () => {
  const products = await totalRehabApi.getProducts();

  // Sort products to put those with the lowest quantity first.
  const sortedProducts = products.items.sort((a, b) => a.quantity - b.quantity);

  return {
    props: {
      products: sortedProducts,
    },
  };
};

export default AccessCodesPurchasePage;
