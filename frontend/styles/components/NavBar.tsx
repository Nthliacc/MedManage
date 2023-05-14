import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  min-height: 4vh;
  background-color: var(--light-color);
  h1 {
    margin: 0;
  }
  img {
    cursor: pointer;
  }
`;
