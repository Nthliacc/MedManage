import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Dashboard = () => {
  const router = useRouter();

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

        <ButtonCard onClick={() => router.push('medication/search')}>
          <img
            src="search.png"
            alt="Pesquisar medicamento"
            title="Pesquisar medicamento"
          />
        </ButtonCard>

        <ButtonCard onClick={() => router.push('/setting')}>
          <img src="settings.png" alt="Configurações" title="Configurações" />
        </ButtonCard>

        <ButtonCard onClick={() => router.push('/logout')}>
          <img src="logout.png" alt="Sair" title="Sair" />
        </ButtonCard>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
  /* background-color: #ffffff; */
  /* border-radius: 0.5rem; */
`;

const ButtonCard = styled.button`
  background-color: var(--white-color) !important;
  border: none;
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: 0.3s;
  animation: ease-in-out 0.5s;
  img {
    width: auto;
    height: 4rem;
    max-height: 60px;
  }
  &:hover {
    transform: scale(1.2);
    img {
      transform: scale(1.2);
    }
  }
`;
