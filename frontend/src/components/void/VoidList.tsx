import styled from 'styled-components';
import Button from '../Button';
import { useRouter } from 'next/router';

const VoidList = () => {
  const router = useRouter();
  return (
    <VoidContainer>
      {/* <img
        src="list-void.png"
        alt="Nenhum medicamento cadastrado"
        height={200}
      /> */}
      <h1>Nenhum medicamento cadastrado</h1>
      <Button
        color="secondary"
        animate={true}
        onClick={() => router.push('/medication/new')}
      >
        Adicionar
      </Button>
    </VoidContainer>
  );
};

export default VoidList;

const VoidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 60vh;
  width: 100%;
`;
