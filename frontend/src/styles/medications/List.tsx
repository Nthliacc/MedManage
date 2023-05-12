import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-bottom: 6%;
`;