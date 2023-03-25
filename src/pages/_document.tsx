import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';

export const Document: NextPage = () => (
  <Html lang="en">
    <Head>
      <meta
        name="facebook-domain-verification"
        content="bhzgm3ubqcf2wjigbss8co7l18etpg"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
