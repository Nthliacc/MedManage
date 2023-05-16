import Wizard from "@/components/wizard";
import { get, put } from "@/services/api";
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
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", Number(data.price));
    formData.append("expiration_date", data.expiration_date);
    formData.append("image", data.image);
    console.log(query.id)
    await put(`/medication/${query.id}`, formData, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
      .then((response) => {
        const { id } = response?.data;

        router.push(`/medication/${id}`);
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
