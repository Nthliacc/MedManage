import Card from '@/components/Card';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import Search from '@/components/Search';
import VoidList from '@/components/void/VoidList';
import { get } from '@/services/api';
import { ListContainer, Grid} from '@/styles/medications/List';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';

const ListPage = ({ medications }: Props) => {
  const medicationsList = Object.values(medications);

  return (
    <ListContainer>
      <NavBar />
      <Search />
      <Suspense fallback={<Loader />}>
        {medicationsList && medicationsList.length > 0 ? (
          <Grid>
            {medicationsList.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Grid>
        ) : (
          <VoidList />
        )}
      </Suspense>
    </ListContainer>
  );
};

export default ListPage;

type Props = {
  medications: MedicationCreate[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const medications = await get('/medication');

  return { props: { medications } };
};
