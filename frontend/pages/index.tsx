import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Dashboard from './dashboard';
import { useAuth } from '@/services/auth';

const Home = () => {
  const router = useRouter();
  const { tokenExpired } = useAuth();

  useEffect(() => {
    if (tokenExpired()) {
      router.push('/login');
    }
  }, [router.asPath]);

  return <Dashboard />
};

export default Home;