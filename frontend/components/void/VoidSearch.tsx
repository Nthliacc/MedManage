import { VoidContainer } from "@/styles/Void";

const VoidSearch = () => {
  return (
    <VoidContainer>
      <img src="/search-void.png" alt="Nenhum medicamento encontrado" height={200} />
      <h1>Nenhum medicamento encontrado</h1>
      <p>Utilize a barra de pesquisa para encontrar o medicamento desejado.</p>
    </VoidContainer>
  );
};

export default VoidSearch;
