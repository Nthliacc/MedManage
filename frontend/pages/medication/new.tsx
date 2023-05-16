import Wizard from "@/components/wizard";
import { post } from "@/services/api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Props {
  newMedication: MedicationCreate | Medication;
}

const NewMedicationPage = ({ newMedication }: Props) => {
  const router = useRouter();

  const onSucess = async (data: MedicationCreate) => {
    const formData = new FormData();
    
    formData.append('name', data.name);
    formData.append('price', data.price.toString());
    formData.append('expiration_date', data.expiration_date);
    formData.append('image', data.image);
    
    await post('/medication', formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
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
