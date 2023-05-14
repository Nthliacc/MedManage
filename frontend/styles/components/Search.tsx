import Button from '@/components/Button';
import styled from 'styled-components';

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

