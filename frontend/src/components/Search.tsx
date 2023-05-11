import { AddButton, SearchBar, SearchButton, Section } from '@/styles/Home';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  return (
    <Section>
      <SearchBar>
        <input type="text" placeholder="Pesquisar" />
        <SearchButton onClick={() => console.log('Pesquisar')}>
          <img src="search.png" alt="Pesquisar" title="Pesquisar" width={20} />
        </SearchButton>
      </SearchBar>
      <AddButton onClick={() => router.push('/wizard')}>
        <img src="add.png" alt="Adicionar" title="Adicionar" width={20} />
      </AddButton>
    </Section>
  );
};

export default Search;
