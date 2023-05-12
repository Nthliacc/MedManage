import { CardContainer, Price, Tools, ImageMed, Overlay } from '@/styles/components/Card';
import ButtonIcon from './ButtonIcon';
import formatValue from '@/utils/formatValue';
import formatDate from '@/utils/formatDate';

type Props = {
  item: Medication;
}

const Card = ({item}: Props) => {
  console.log(!item.image)
  return (
    <CardContainer key={item.id}>
      <ImageMed
        imageURL={item.image ? item.image : '/default-image.png'}
        isVoid={!item.image}
        className="imgMed"
        // src={item.image ? item.image : '/default-image.png'}
        // alt="Imagem do medicamento"
        title="Imagem do medicamento"
      />
      <Price className="price">{item.price ? formatValue(item.price) : "Valor não cadastrado"}</Price>
      <Overlay>
        <h2>{item.name}</h2>
        <p>Expira em: {formatDate(item.expiration_date)}</p>
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
      </Overlay>
    </CardContainer>
  );
};

export default Card;
