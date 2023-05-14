import { createContext, useContext, useState } from 'react';
import { del, post, put } from './api';

type MedicationContextType = {
  addMedication: (medication: MedicationCreate) => void;
  removeMedication: (id: string) => void;
  updateMedication: (medication: Medication) => void;
  getMedicationId: (id?: string) => void;
};

const MedicationContext = createContext<MedicationContextType>({
  addMedication: () => {},
  removeMedication: () => {},
  updateMedication: () => {},
  getMedicationId: () => {},
});

export const useMedication = () => useContext(MedicationContext);

type Props = {
  children: React.ReactNode;
};

export const MedicationProvider = ({ children }: Props) => {
  const [medication, setMedication] = useState<Medication>(
    {} as Medication
  );
  const [medications, setMedications] = useState<Medication[]>([]);

  const addMedication = () => {
    const response = post('/medication', medication);
    if (!response) {
      return;
    }

    setMedications([...medications, medication]);
  };

  const removeMedication = (id: string) => {
    const response = del(`/medication/${id}`);
    if (!response) {
      return;
    }

    const newMedications = medications.filter(
      (item) => item.id !== id
    );
    setMedications(newMedications);
  };

  const updateMedication = (medication: Medication) => {
    const response = put(`/medication/${medication.id}`, medication);
    if (!response) {
      return;
    }

    const newMedications = medications.map((item) => {
      if (item.id === medication.id) {
        return medication;
      }
      return item;
    });
    setMedications(newMedications);
  };

  const getMedicationId = (id?: string) => {
    const medication = medications.find((item) => item.id === id);
    if (medication) {
      setMedication(medication);
    }
  };
  return (
    <MedicationContext.Provider
      value={{addMedication, removeMedication, updateMedication, getMedicationId }}
    >
      {children}
    </MedicationContext.Provider>
  );
};

export default MedicationProvider;
