import {
  CardContainer,
  Price,
  Tools,
  ImageMed,
  Overlay
} from '@/styles/components/Card';
import ButtonIcon from './ButtonIcon';
import formatValue from '@/utils/formatValue';
import formatDate from '@/utils/formatDate';
import { useRouter } from 'next/router';
import Button from './Button';

type Props = {
  item: Medication;
};

const Card = ({ item }: Props) => {
  const router = useRouter();
  const isAdmin = false;

  const handleDelete = () => {
    console.log('Excluir');
  };

  const handleEdit = () => {
    console.log('Editar');
  };
  const handleView = () => {
    router.push(`/medication/${item.id}`);
  };

  return (
    <CardContainer key={item.id} onClick={handleView}>
      <ImageMed
        imageURL={item.image ? item.image : '/default-image.png'}
        isVoid={!item.image}
        className="imgMed"
        // src={item.image ? item.image : '/default-image.png'}
        // alt="Imagem do medicamento"
        title="Imagem do medicamento"
      />
      <Overlay>
      <Price className="price">
        {item.price ? formatValue(item.price) : 'R$ 0,00'}
      </Price>
        <h2>{item.name}</h2>
        <p className='date'>Expira em: {formatDate(item.expiration_date)}</p>
        {isAdmin ? (
          <Tools className="tools">
            <ButtonIcon
              icone="/edit.png"
              title="Editar"
              size="18"
              onClick={() => console.log('Editar')}
            >
              Editar
            </ButtonIcon>
            <ButtonIcon
              icone="/delete.png"
              title="Excluir"
              size="20"
              onClick={() => console.log('Excluir')}
            >
              Excluir
            </ButtonIcon>
          </Tools>
        ) : (
          <Button className="view" color='primary' size='large' onClick={handleView}>Visualizar</Button>
        )}
      </Overlay>
    </CardContainer>
  );
};

export default Card;
