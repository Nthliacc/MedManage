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
  top: -6%;
  
  button {
    margin-bottom: 0.8rem;
    font-weight: bold;
  }
  button:last-child {
    color: var(--deep-blue);
  }
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
  font-size: 16px;
  width: 100%;
  /* #password {
    position: relative;
  } */
`;

export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  text-align: center;
  width: 100%;
`;

export const PasswordButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 8px !important;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const InputPassword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  background-color: var(--light-color);
  border-radius: 5px;
  padding: 0px !important;
  width: 100%;
  input {
    margin: 0;
  }
`;