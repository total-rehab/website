import { ApiComponents } from '@jambff/oac';
import { GetStaticProps, NextPage } from 'next';
import { Container } from '../../components/Container';
import { Page } from '../../components/Page';
import { SectionHeading } from '../../components/SectionHeading';
import { SectionText } from '../../components/SectionText';
import { UkcaBar } from '../../components/UkcaBar';
import { totalRehabApi } from '../../total-rehab-api';
import { Product } from '../../components/Product';
import { DashboardLayout } from '../../components/DashboardLayout';

type DashboardPageProps = {
  products: ApiComponents['Product'][];
};

const ProductsPage: NextPage<DashboardPageProps> = ({
  products,
}: DashboardPageProps) => (
  <Page hideHeader title="Sign up" description="Sign up to the Total Rehab app">
    <DashboardLayout lead="Purchase">
      <section>
        <Container className="pt-12 pb-12 lg:pb-20 space-y-12 lg:space-y-16 text-center">
          <div>
            <SectionHeading>Sign up for full access</SectionHeading>
            <SectionText>
              Purchase access codes to provide your patients with full access to
              all programs.
            </SectionText>
          </div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </DashboardLayout>
  </Page>
);

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
