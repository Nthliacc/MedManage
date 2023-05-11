import React, { useEffect } from 'react';
import { useAuth } from '@/services/auth';

const LogoutPage = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
