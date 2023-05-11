import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import AuthProvider from '@/services/auth';
import MedicationProvider from '@/services/medication';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const userName = localStorage.getItem('user');
    if (
      !userName &&
      router.pathname !== '/login' &&
      router.pathname !== '/register'
    ) {
      router.push('/login');
    } else if (userName && router.pathname === '/login') {
      router.push('/dashboard');
    }
  }, [router.pathname]);

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
