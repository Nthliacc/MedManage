import { useContext } from 'react';
import { NavBarContainer } from '@/styles/components/NavBar';
import { AuthContext } from '@/services/auth';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <NavBarContainer>
      <img src="/logo.png" width="80" onClick={handleHome} />
      <h1>{`Olá, ${user ? user.username : 'visitante'}!`}</h1>
    </NavBarContainer>
  );
}
