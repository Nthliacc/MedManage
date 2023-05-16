import Wizard from "@/components/wizard";
import { get, put } from "@/services/api";
import { getItem } from "@/utils/localStorage";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  medication: MedicationCreate | Medication;
}

const EditMedicationPage = ({ medication }: Props) => {
  const [medicationState, setMedicationState] = useState<Props>({ medication });
  const router = useRouter();
  const { query } = router;
  const token = getItem('token');

  useEffect(() => {
    async function getMedication() {
      if (query.id) {
        const { id } = query;
        const medication = await get(`medication/${id}`);
        setMedicationState({ medication });
      }
    }
    getMedication();
  }, []);

  const onSucess = async (data: MedicationCreate) => {
    const formData = {
      name: data.name,
      price: data.price,
      expiration_date: data.expiration_date,
    }

    await put(`/medication/${query.id}`, formData, { 
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }})
      .then((response) => {
        router.push(`/medication/${query.id}`);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Wizard medication={medicationState.medication} onSubmit={onSucess} />;
};

export default EditMedicationPage;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { id } = query;
  const medication = await get(`medication/${id}`);
  console.log(medication);
  return {
    props: {
      medication,
    },
  };
};
