import React from 'react';
import {
  Label,
  Input,
  ButtonContainer,
  Button,
  FormContainer,
  ImagePreview
} from '@/styles/Wizard';

type StepTwoProps = {
  onBack: () => void;
  onNext: () => void;
  setData: (data: {
    name: string;
    expiration_date: string;
    image: File | undefined;
  }) => void;
};

const StepTwo: React.FC<StepTwoProps> = ({ onBack, onNext, data, setData }) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setData((data): Medication => ({ ...data, image: file }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Upload de imagem:
        <Input type="file" accept="image/*" onChange={handleFileSelect} />
      </Label>
      {data.file ? (
        <ImagePreview
          src={URL.createObjectURL(data.file)}
          alt="Imagem selecionada"
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        ''
      )}

      <ButtonContainer>
        <Button type="button" onClick={onBack}>
          Voltar
        </Button>
        <Button type="submit" disabled={!data.file}>
          Próximo
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default StepTwo;
