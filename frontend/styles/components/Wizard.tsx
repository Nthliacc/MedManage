import styled from 'styled-components';

export const WizardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* padding: 6rem; */
  /* min-height: 90vh; */
  background-color: var(--white-color);
  padding: 2rem;
  border-radius: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 560px;
  padding-bottom: 2rem;
`;

export const Label = styled.label`
  /* margin-top: 20px; */
  font-size: 18px;
  font-weight: bold;
  width: 100%;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--light-color);
  /* border: 1px solid gray; */
  font-size: 16px;
  width: 100%;
  .input {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--light-color);
    font-size: 16px;
    width: 100%;
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--light-color) inset !important;
    caret-color: var(--light-color) !important;
    background-color: var(--light-color) !important;
  }
`;

export const NumericFormatStyle = {
  marginBottom: '10px',
  padding: '1rem',
  borderRadius: '5px',
  backgroundColor: 'var(--light-color)',
  fontSize: '16px',
  width: '100%',

  ':-webkit-autofill': {
    '-webkit-box-shadow': '0 0 0px 1000px var(--light-color) inset !important',
    caretColor: 'var(--light-color) !important',
    backgroundColor: 'var(--light-color) !important',
  }
};

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3f51b5;
  color: var(--light-color) !important;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Value = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
