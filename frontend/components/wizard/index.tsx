import React, { Suspense, useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import { useRouter } from 'next/router';
import {
  ButtonContainer,
  SubTitle,
  WizardContainer
} from '@/styles/components/Wizard';
import Button from '../Button';

interface Props {
  medication: MedicationCreate | Medication;
  onSubmit: (data: MedicationCreate) => void;
}

const Wizard = ({ medication, onSubmit } : Props) => {
  const router = useRouter();
  const [data, setData] = React.useState(medication);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (medication) {
      setData(medication);
    }
  }, [medication]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    step === 3 ? onSubmit(data) : nextStep();
  };

  return (
    <WizardContainer>
      <h1>Cadastro de Medicamento</h1>
      <p>Preencha os dados abaixo para cadastrar um novo medicamento.</p>
      <SubTitle>Passo {step} de 3</SubTitle>
      <ProgressBar currentStep={step} />
      <Suspense fallback={<div>Loading...</div>}>
        {step === 1 && <StepOne data={data} setData={setData} />}
        {step === 2 && <StepTwo data={data} setData={setData} />}
        {step === 3 && <StepThree data={data} />}

        <ButtonContainer>
          <Button
            onClick={step === 1 ? () => router.push('/') : prevStep}
            color="tertiary"
          >
            {step === 1 ? 'Cancelar' : 'Voltar'}
          </Button>
          <Button onClick={handleSubmit} color="tertiary">
            {step === 3 ? 'Salvar' : 'Próximo'}
          </Button>
        </ButtonContainer>
      </Suspense>
    </WizardContainer>
  );
};

export default Wizard;
