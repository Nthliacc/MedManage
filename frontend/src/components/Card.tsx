import { CardContainer, Price, Tools } from '@/styles/Home';
import ButtonIcon from './ButtonIcon';
import formatValue from '@/utils/formatValue';

const Card = (item: MedicationCreate) => {
  return (
    <CardContainer key={item.id}>
      <img
        className="imgMed"
        src={item.image}
        alt="Imagem do medicamento"
        title="Imagem do medicamento"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = 'default-image.png';
        }}
      />
      <Price className="price">{formatValue(item.price)}</Price>
      <div className="overlay">
        <h2>{item.name}</h2>
        <p>{item.expiration_date}</p>
        <Tools className="tools">
          <ButtonIcon
            icone="edit.png"
            title="Editar"
            size="18"
            onClick={() => console.log('Editar')}
          >
            Editar
          </ButtonIcon>
          <ButtonIcon
            icone="delete.png"
            title="Excluir"
            size="20"
            onClick={() => console.log('Excluir')}
          >
            Excluir
          </ButtonIcon>
        </Tools>
      </div>
    </CardContainer>
  );
};

export default Card;
