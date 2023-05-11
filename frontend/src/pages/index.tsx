import Card from '@/components/Card';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import Search from '@/components/Search';
import VoidList from '@/components/void/VoidList';
import { Grid, HomeContainer } from '@/styles/Home';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';

const Home = (data: any) => {
  return (
    <HomeContainer>
      <NavBar />
      <Search />
      <Suspense fallback={<Loader />}>
        {data.length ? (
          <Grid>
            {data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Grid>
        ) : (
          <VoidList />
        )}
      </Suspense>
    </HomeContainer>
  );
};

export default Home;

type Props = {
  data: MedicationCreate[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const data = await fetch("your_api_url").then((res) => res.json());
  const data: any = [];
  return { props: { data } };
};
