import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import AuthProvider from '@/services/auth';
import MedicationProvider from '@/services/medicationContext';
import GlobalStyles from '../styles/GlobalStyles';
import WizardProvider from '@/services/wizardContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AuthProvider>
        <MedicationProvider>
          <WizardProvider>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WizardProvider>
        </MedicationProvider>
      </AuthProvider>
    </Fragment>
  );
}
