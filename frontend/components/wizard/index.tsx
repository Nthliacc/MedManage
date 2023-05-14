import React, { Suspense, useState } from 'react';
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
import { get, post } from '@/services/api';
import Button from '../Button';
import { GetServerSideProps } from 'next';

interface Props {
  medication: MedicationCreate | Medication;
}

const Wizard = ({ medication }: Props) => {
  const router = useRouter();
  const [data, setData] = React.useState(medication);
  const [step, setStep] = useState(1);
  console.log(medication);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSucess = async () => {
    await post('/medication', data)
      .then((response) => {
        const { id } = response?.data;
    
        router.push(`/medication/${id}`);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Button onClick={step === 3 ? onSucess : nextStep} color="tertiary">
            {step === 3 ? 'Salvar' : 'Próximo'}
          </Button>
        </ButtonContainer>
      </Suspense>
    </WizardContainer>
  );
};

export default Wizard;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => {
  if (query.id) {
    const { id } = query;
    console.log(1);
    const medication = await get(`medication/${id}`);

    return {
      props: {
        medication
      }
    };
  } else {
    console.log(2);
    return {
      props: {
        medication: {
          name: '',
          price: 0,
          expiration_date: '',
          image: null
        }
      }
    };
  }
};
