import { useContext } from 'react';
import { NavBarContainer } from '@/styles/NavBar';
import { AuthContext } from '@/services/auth';

export default function NavBar() {
  // const { user } = useContext(AuthContext);

  return (
    <NavBarContainer>
      <img src="logo.png" width="80" />
      <h1>'Olá, visitante!'</h1>
    </NavBarContainer>
  );
}
