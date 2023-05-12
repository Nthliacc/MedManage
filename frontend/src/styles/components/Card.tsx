import styled from 'styled-components';

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
  gap: 2.5rem;
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
`;

export const Overlay = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--medium-blue);
  }
`;

export const ImageMed = styled.div<{isVoid: boolean, imageURL: string}>`
  width: auto;
  height: 300px;
  background-image: url(${props => props.imageURL});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 60%;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  opacity: ${props => props.isVoid ? 0.3 : 1};
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
