import React from 'react';
import { useRouter } from 'next/router';
import {
  FormContainer,
  Label,
  Input,
  ButtonContainer,
  Button
} from '@/styles/Wizard';
import { NumericFormat } from 'react-number-format';

interface stepOneProps {
  onNext: () => void;
  data: MedicationCreate;
  setData: () => void;
}

const StepOne = ({ onNext, data, setData }: stepOneProps) => {
  const router = useRouter();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState: Medication) => ({
      ...prevState,
      name: event.target.value
    }));
  };

  const handleExpirationDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData((prevState: Medication) => ({
      ...prevState,
      expiration_date: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext();
  };
  console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">Nome*</Label>
      <Input
        type="text"
        id="name"
        defaultValue={data?.name}
        onChange={handleNameChange}
        required
      />
      <Label htmlFor="price">Preço*</Label>
      <NumericFormat
        id="price"
        defaultValue={data?.price}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        required
        className="input"
        onValueChange={(values) => {
          const { floatValue } = values;
          setData((prevState: MedicationCreate) => ({
            ...prevState,
            price: floatValue
          }));
        }}
        style={{
          marginBottom: '10px',
          padding: '1rem',
          borderRadius: '5px',
          backgroundColor: 'var(--light-color)',
          fontSize: '16px',
          width: '100%'
        }}
      />
      <Label htmlFor="expirationDate">Data de Validade*</Label>
      <Input
        type="date"
        id="expirationDate"
        defaultValue={data?.expiration_date}
        onChange={handleExpirationDateChange}
        required
      />
      <ButtonContainer>
        <Button type="button" onClick={() => router.push('/')}>
          Cancelar
        </Button>
        <Button type="submit">Próximo</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default StepOne;
