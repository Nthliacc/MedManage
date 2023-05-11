import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);
  color: var(--deep-blue);
  font-family: var(--font-sans);
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 4vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  p {
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--deep-blue);
    text-decoration: none;
    &:hover {
      color: var(--medium-blue);
    }
  }
`;
