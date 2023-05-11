interface MedicationCreate {
  id: string;
  name: string;
  price: number;
  expiration_date: string;
  image: string;
}

interface Medication {
  id?: string;
  name: string;
  price: number;
  expiration_date: string;
  image: string;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
}
