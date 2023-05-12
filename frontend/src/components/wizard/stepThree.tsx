import {
  Button,
  ButtonContainer,
  FormContainer,
  ImagePreview,
  Label,
  Section,
  Title,
  Value
} from '@/styles/components/Wizard';
import formatDate from '@/utils/formatDate';
import formatValue from '@/utils/formatValue';
import React from 'react';

type StepThreeProps = {
  onBack: () => void;
  onSubmit: () => void;
  data: {
    name: string;
    expiration_date: string;
    price: number;
    image: File | undefined;
  };
};

const StepThree: React.FC<StepThreeProps> = ({ onBack, onSubmit, data }) => {
  return (
    <FormContainer>
      <Section>
        <Title>Dados do medicamento</Title>
        <Label>
          Nome: <Value>{data.name}</Value>
        </Label>
        <Label>
          Data de expiração: <Value>{formatDate(data.expiration_date)}</Value>
        </Label>
        <Label>
          Preço: <Value>{formatValue(data.price)}</Value>
        </Label>
      </Section>
      <Section>
        <Title>Imagem</Title>
        {data.image && (
          <ImagePreview
            src={URL.createObjectURL(data.image)}
            alt="Imagem do medicamento"
            width={10}
          />
        )}
      </Section>
      <ButtonContainer>
        <Button type="button" onClick={onBack}>
          Voltar
        </Button>
        <Button type="button" onClick={onSubmit}>
          Enviar
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default StepThree;
