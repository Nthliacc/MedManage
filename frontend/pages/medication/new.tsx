import Wizard from "@/components/wizard";
import { post } from "@/services/api";
import { getItem } from "@/utils/localStorage";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Props {
  newMedication: MedicationCreate | Medication;
}

const NewMedicationPage = ({ newMedication }: Props) => {
  const router = useRouter();
  const token = getItem('token');

  const onSucess = async (data: MedicationCreate) => {
    const formData = {
      name: data.image,
      price: data.price,
      expiration_date: data.expiration_date,
    }

    await post('/medication', formData, {
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        const { id } = response?.data;
    
        router.push(`/medication/${id}`);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <Wizard medication={newMedication} onSubmit={onSucess}/>;
};

export default NewMedicationPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
      props: {
        newMedication: {
          name: '',
          price: 0,
          expiration_date: '',
          image: ''
        },
        revalidate: 6
      }
    };
};
