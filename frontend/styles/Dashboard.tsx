import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }

`;

export const ButtonCard = styled.button`
  background-color: var(--white-color) !important;
  width: 10rem;
  height: 10rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: 0.3s;
  animation: ease-in-out 0.5s;
  img {
    width: auto;
    height: 4rem;
    max-height: 60px;
  }
  &:hover {
    transform: scale(1.2);
    img {
      transform: scale(1.2);
    }
  }
`;
