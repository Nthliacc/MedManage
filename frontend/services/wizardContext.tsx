import React, { createContext, useState, useContext } from "react";

type WizardContextType = {
  medication: MedicationCreate;
  setMedication: (medication: MedicationCreate) => void;
};

const WizardContext = createContext<WizardContextType>({
  medication: {
    name: "",
    expiration_date: "",
    price: 0,
    image: "",
  },
  setMedication: () => {},
});

export const useWizardContext = () => useContext(WizardContext);

type WizardProviderProps = {
    children: React.ReactNode;
}

export const WizardProvider = ({ children }: WizardProviderProps) => {
  const [medication, setMedication] = useState<MedicationCreate>({} as MedicationCreate);

  return (
    <WizardContext.Provider 
        value={{ medication, setMedication }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export default WizardProvider;
