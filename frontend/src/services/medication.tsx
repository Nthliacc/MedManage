import { createContext, useContext, useState } from 'react';

type MedicationContextType = {
  medication: MedicationCreate;
  setMedication: (medication: MedicationCreate) => void;
  medications: Medication[];
  addMedication: (medication: MedicationCreate) => void;
};

const MedicationContext = createContext<MedicationContextType>({
  medication: {
    id: '',
    name: '',
    expiration_date: '',
    price: 0,
    image: ''
  } as MedicationCreate,
  setMedication: () => {},
  medications: [],
  addMedication: () => {}
});

export const useMedication = () => useContext(MedicationContext);

type Props = {
  children: React.ReactNode;
};

export const MedicationProvider = ({ children }: Props) => {
  const [medication, setMedication] = useState<MedicationCreate>(
    {} as MedicationCreate
  );
  const [medications, setMedications] = useState<Medication[]>([]);

  const addMedication = () => {
    setMedications([...medications, medication]);
  };

  const removeMedication = (medication: Medication) => {
    const newMedications = medications.filter(
      (item) => item.id !== medication.id
    );
    setMedications(newMedications);
  };

  const updateMedication = (medication: Medication) => {
    const newMedications = medications.map((item) => {
      if (item.id === medication.id) {
        return medication;
      }
      return item;
    });
    setMedications(newMedications);
  };

  const getMedication = (id: string) => {
    const medication = medications.find((item) => item.id === id);
    if (medication) {
      setMedication(medication);
    }
  };

  const getMedications = () => {
    return medications;
  };

  return (
    <MedicationContext.Provider
      value={{ medication, setMedication, medications, addMedication }}
    >
      {children}
    </MedicationContext.Provider>
  );
};

export default MedicationProvider;
