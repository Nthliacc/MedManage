import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--light-color);
  color: var(--deep-blue);
  font-family: var(--font-sans);
  font-size: 1.2rem;
  padding: 1rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  /* button {
    background-color: var(--medium-blue);
    color: var(--light-blue);
    border: none;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      background-color: var(--dark-blue);
    }
  } */
  input {
    /* border: 1px solid var(--deep-blue); */
    border: none;
    border-radius: var(--border-radius);
    padding: 1rem 1rem;
  }
  input:focus {
    outline: none;
  }
  form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light-color);
    color: var(--deep-blue);
    font-family: var(--font-sans);
    font-size: 1.2rem;
    padding: 1rem;
  }
`;
