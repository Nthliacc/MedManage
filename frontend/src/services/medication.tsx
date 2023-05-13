import { createContext, useContext, useState } from 'react';
import { del, get, post, put } from './api';

type MedicationContextType = {
  medication: Medication;
  medications: Medication[];
  addMedication: (medication: MedicationCreate) => void;
  removeMedication: (id: string) => void;
  updateMedication: (medication: Medication) => void;
  getMedicationId: (id?: string) => void;
  getMedications: (name?: string) => void;
};

const MedicationContext = createContext<MedicationContextType>({
  medication: {
    id: '',
    name: '',
    expiration_date: '',
    price: 0,
    image: ''
  } as MedicationCreate,
  medications: [],
  addMedication: () => {},
  removeMedication: () => {},
  updateMedication: () => {},
  getMedicationId: () => {},
  getMedications: () => {}
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

  const getMedications = (name?: string) => {
    const response = get(name ? `/medication/name?${name}` : '/medication');

    if (!response) {
      return;
    }
    
    setMedications(response.data);
  };

  return (
    <MedicationContext.Provider
      value={{ medication, medications, addMedication, removeMedication, updateMedication, getMedicationId, getMedications }}
    >
      {children}
    </MedicationContext.Provider>
  );
};

export default MedicationProvider;
