import {
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
  data: MedicationCreate;
};

const StepThree: React.FC<StepThreeProps> = ({ data }) => {
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
            src={URL.createObjectURL(data.image as Blob)}
            alt="Imagem do medicamento"
            width={10}
          />
        )}
      </Section>
    </FormContainer>
  );
};

export default StepThree;
