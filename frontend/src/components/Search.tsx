import {
  AddButton,
  SearchBar,
  SearchButton,
  Section
} from '@/styles/components/Search';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/medication',
      query: { name: e.target.value }
    })
  }

  return (
    <Section>
      <SearchBar>
        <input type="text" placeholder="Pesquisar" id="searchInput" onChange={e => handleSearch(e)}/>
        <SearchButton type="submit">
          <img src="\search.png" alt="Pesquisar" title="Pesquisar" width={20} />
        </SearchButton>
      </SearchBar>
      <AddButton onClick={() => router.push('/medication/new')}>
        <img src="\add.png" alt="Adicionar" title="Adicionar" width={20} />
      </AddButton>
    </Section>
  );
};

export default Search;
