import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import {
  DashboardContainer,
  ButtonContainer,
  ButtonCard
} from '@/styles/Dashboard';

const Dashboard = () => {
  const router = useRouter();
  const isAdmin = true;

  return (
    <DashboardContainer>
      <NavBar />
      <ButtonContainer>
        <ButtonCard onClick={() => router.push('medication/new')}>
          <img
            src="add.png"
            alt="Adicionar medicamento"
            title="Adicionar medicamento"
          />
        </ButtonCard>

        <ButtonCard onClick={() => router.push('medication')}>
          <img
            src="list.png"
            alt="Listar medicamentos"
            title="Listar medicamentos"
          />
        </ButtonCard>

        {/* <ButtonCard onClick={() => router.push('medication/search')}>
          <img
            src="search.png"
            alt="Pesquisar medicamento"
            title="Pesquisar medicamento"
          />
        </ButtonCard> */}

        {isAdmin && (
          <ButtonCard onClick={() => router.push('/setting')}>
            <img src="settings.png" alt="Configurações" title="Configurações" />
          </ButtonCard>
        )}

        <ButtonCard onClick={() => router.push('/logout')}>
          <img src="logout.png" alt="Sair" title="Sair" />
        </ButtonCard>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
