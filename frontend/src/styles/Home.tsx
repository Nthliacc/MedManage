import Button from '@/components/Button';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  width: 80%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: #ffffff;
  border-radius: 0.5rem;
  input {
    width: 100%;
    height: 100%;
    border: none;
    font-family: var(--font-sans);
    font-size: 1rem;
    background-color: transparent;
  }
  input:focus {
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  background-color: var(--light-color) !important;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

export const AddButton = styled.button`
  background-color: transparent !important;
  border: none;
  cursor: pointer;
  width: 10%;
  height: 100%;
  img {
    width: 3rem;
    height: 100%;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const Tools = styled.div`
  button {
    opacity: 0;
  }
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--white-color);
  color: var(--deep-blue);
  font-family: var(--font-sans);
  font-size: 1.2rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  width: 280px;
  max-height: 340px;
  position: relative;
  &:hover {
    transform: scale(1.05);
    .tools > button {
      opacity: 1;
    }
  }
  .overlay {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }

  .imgMed {
    width: 100%;
    height: 58%;
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .overlay > h2 {
    font-size: 1.5rem;
  }

  .overlay > p {
    font-size: 1rem;
  }
`;

export const Price = styled.p`
  position: absolute;
  top: 0px; /* Define a distância do preço em relação à borda inferior */
  right: 0px; /* Define a distância do preço em relação à borda esquerda */
  padding: 4px 8px; /* Adiciona um espaçamento interno ao redor do preço */
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* Adiciona uma sombra ao texto para melhorar a visibilidade */
  background-color: var(--dark-blue);
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  opacity: 0.8;
`;
