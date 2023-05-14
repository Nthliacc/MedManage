import Card from '@/components/Card';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import Search from '@/components/Search';
import VoidList from '@/components/void/VoidList';
import VoidSearch from '@/components/void/VoidSearch';
import { get } from '@/services/api';
import { ListContainer, Grid } from '@/styles/medications/List';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';

const ListPage = ({ data }: Props) => {
  const { list, isFilter } = data;
  const medicationsList = list ? Object.values(list) : [];

  return (
    <ListContainer>
      <NavBar />
      <Search />
      <Suspense fallback={<Loader />}>
        {medicationsList.length > 0 ? (
          <Grid>
            {medicationsList.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Grid>
        ) : isFilter ? (
          <VoidSearch />
        ) : (
          <VoidList />
        )}
      </Suspense>
    </ListContainer>
  );
};

export default ListPage;

type Props = {
  data: {
    list: MedicationCreate[];
    isFilter?: boolean;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => {
  try {
    const { name } = query;
    const medications = await get('/medication').then((response) => {
      return response;
    });

    if (!name)
      return { props: { data: { list: medications, isFilter: false } } };

    const filteredMedications = medications.filter((medication: Medication) =>
      medication.name.toLowerCase().includes(name as string)
    );

    return { props: { data: { list: filteredMedications, isFilter: true }, revalidate: 60 } };
  } catch (error) {
    console.log(error);
    return { props: { data: { list: [], isFilter: false } } };
  }
};
