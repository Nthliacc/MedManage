import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import AuthProvider from '@/services/auth';
import MedicationProvider from '@/services/medication';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AuthProvider>
        <MedicationProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MedicationProvider>
      </AuthProvider>
    </Fragment>
  );
}
