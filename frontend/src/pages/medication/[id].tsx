import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { get } from '@/services/api';
// import { Medication } from '@/models/medication';

type Props = {
  medication: Medication;
};

const viewPage = ({ medication }: Props) => {
  const router = useRouter();
  // const { id } = router.query;

  // Verifica se o medicamento foi encontrado
  if (!medication) {
    return <div>Medicamento não encontrado</div>;
  }

  return (
    <div>
      <h1>{medication.name}</h1>
      <p>Preço: {medication.price}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = context.query;

  // Fazer uma consulta no banco de dados para buscar as informações do medicamento com o ID fornecido
  const medication = await get(`medication/${id}`);

  return {
    props: {
      medication
    }
  };
};

export default viewPage;
