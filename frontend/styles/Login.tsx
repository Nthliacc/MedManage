import styled from 'styled-components';

export const Image = styled.img`
  align-self: center;
  margin: -16%;
  width: 240px;
  height: 240px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--white-color);
  color: var(--deep-blue);
  font-family: var(--font-sans);
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 30%;
  height: 70%;
  max-width: 400px;
  margin: 0.5rem;
  position: relative;
  top: -6%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  /* margin-bottom: 0.5rem; */
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 12px !important;
  border-radius: 5px;
  background-color: var(--light-color);
  /* border: 1px solid gray; */
  font-size: 16px;
  width: 100%;

  &::placeholder {
    /* color: var(--medium-blue); */
  }
`;

export const Button = styled.button`
  background-color: var(--deep-blue);
  color: var(--light-color) !important;
  padding: 0.8rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
`;
