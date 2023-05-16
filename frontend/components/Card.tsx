import {
  CardContainer,
  Price,
  ImageMed,
  Overlay,
} from "@/styles/components/Card";
import formatValue from "@/utils/formatValue";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";
import Button from "./Button";

type Props = {
  item: Medication | MedicationCreate;
};

const Card = ({ item }: Props) => {
  const router = useRouter();
  const handleView = () => {
    router.push(`/medication/${item.id}`);
  };

  const image = item.image ? item.image : "/default-image.png";

  return (
    <CardContainer key={item.id} onClick={handleView}>
      <ImageMed
        imageURL={image}
        isVoid={!item.image}
        className="imgMed"
        title="Imagem do medicamento"
      />
      <Overlay>
        <Price className="price">{formatValue(item.price)}</Price>
        <h2>{item.name}</h2>
        <p className="date">Expira em: {formatDate(item.expiration_date)}</p>
        <Button
          className="view"
          color="primary"
          size="large"
          onClick={handleView}
        >
          Visualizar
        </Button>
      </Overlay>
    </CardContainer>
  );
};

export default Card;
