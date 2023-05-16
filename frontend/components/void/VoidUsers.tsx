import Button from '../Button';
import { useRouter } from 'next/router';
import { VoidContainer } from '@/styles/Void';

const VoidUsers = () => {
  const router = useRouter();
  return (
    <VoidContainer>
      <img
        src="list-void.png"
        alt="Nenhum usuário cadastrado"
        height={200}
      />
      <h1>Nenhum usuário cadastrado</h1>
      <Button
        color="secondary"
        animate={true}
        onClick={() => router.push('/register')}
      >
        Adicionar
      </Button>
    </VoidContainer>
  );
};

export default VoidUsers;