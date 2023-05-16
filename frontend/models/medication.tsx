interface MedicationCreate {
  name: string;
  price: number;
  expiration_date: string;
  image: string | Blob;
}

interface Medication {
  id: string;
  name: string;
  price: number;
  expiration_date: string;
  image: string | null;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}
