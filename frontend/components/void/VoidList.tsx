import Button from '../Button';
import { useRouter } from 'next/router';
import { VoidContainer } from '@/styles/Void';

const VoidList = () => {
  const router = useRouter();
  return (
    <VoidContainer>
      <img
        src="list-void.png"
        alt="Nenhum medicamento cadastrado"
        height={200}
      />
      <h1>Nenhum medicamento cadastrado</h1>
      <Button
        color="secondary"
        size='large'
        animate={true}
        onClick={() => router.push('/medication/new')}
      >
        Adicionar
      </Button>
    </VoidContainer>
  );
};

export default VoidList;