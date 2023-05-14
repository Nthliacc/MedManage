import Head from 'next/head';
import Footer from './Footer';
import { Main } from '@/styles/components/Layout';
import { Fragment } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Med Manage</title>
      </Head>
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
}
