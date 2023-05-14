import React from 'react';
import {
  FormContainer,
  Label,
  Input,
  NumericFormatStyle
} from '@/styles/components/Wizard';
import { NumericFormat } from 'react-number-format';

interface stepOneProps {
  data: MedicationCreate;
  setData: (data: any) => void;
}

const StepOne = ({ data, setData }: stepOneProps) => {

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
    setData((prevState: MedicationCreate ) => ({ ...prevState, name: value }));
  };
  
  const handleExpirationDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const expiration_date = event.target.value;
    setData((prevState: MedicationCreate) => ({
      ...prevState,
      expiration_date
    }));
  };

  const handlePriceChange = (value: any) => {
    const price = value.floatValue;
    setData((prevState: MedicationCreate) => ({
      ...prevState,
      price
    }));
  };

  return (
    <FormContainer>
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
        onValueChange={handlePriceChange}
        style={NumericFormatStyle}
      />
      <Label htmlFor="expirationDate">Data de Validade*</Label>
      <Input
        type="date"
        id="expirationDate"
        defaultValue={data?.expiration_date}
        onChange={handleExpirationDateChange}
        required
      />
    </FormContainer>
  );
};

export default StepOne;
