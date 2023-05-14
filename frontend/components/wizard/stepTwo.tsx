import React from 'react';
import {
  Label,
  Input,
  FormContainer,
  ImagePreview
} from '@/styles/components/Wizard';

type StepTwoProps = {
  data: MedicationCreate;
  setData: (data: any) => void;
};

const StepTwo: React.FC<StepTwoProps> = ({  data, setData }) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setData((prevState: MedicationCreate )=> ({ ...prevState, image: file }));
  };

  return (
    <FormContainer>
      <Label>
        Upload de imagem:
        <Input type="file" accept="image/*" onChange={handleFileSelect} />
      </Label>
      {data.image ? (
        <ImagePreview
          src={URL.createObjectURL(data.image as Blob)}
          alt="Imagem selecionada"
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        ''
      )}
    </FormContainer>
  );
};

export default StepTwo;
