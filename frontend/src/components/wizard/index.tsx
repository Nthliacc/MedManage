import React, { Suspense, useState } from 'react';
import ProgressBar from '../ProgressBar';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import { useRouter } from 'next/router';
import { SubTitle, WizardContainer } from '@/styles/components/Wizard';
import { useMedication } from '@/services/medication';

const Wizard: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { medication, setMedication, addMedication } = useMedication();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSucess = () => {
    // addMedication();

    setTimeout(() => {
      alert('Medicamento cadastrado com sucesso!');
      router.push('/');
    }, 1000);
  };

  return (
    <WizardContainer>
      <h1>Cadastro de Medicamento</h1>
      <p>Preencha os dados abaixo para cadastrar um novo medicamento.</p>
      <SubTitle>Passo {step} de 3</SubTitle>
      <ProgressBar currentStep={step} />
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      {step === 1 && <StepOne onNext={nextStep} setData={setMedication} />}
      {step === 2 && (
        <StepTwo
          onNext={nextStep}
          onBack={prevStep}
          data={medication}
          setData={setMedication}
        />
      )}
      {step === 3 && (
        <StepThree onSubmit={onSucess} onBack={prevStep} data={medication} />
      )}
    </WizardContainer>
  );
};

export default Wizard;
