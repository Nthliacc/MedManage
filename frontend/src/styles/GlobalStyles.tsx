import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos globais aqui */
  :root {
    --border-radius: 0.5rem;
    --white-color: #FFFFFF;
    --light-color: #F2F2F2;
    --light-blue: #25B8D9;
    --medium-blue: #25A6D9;
    --dark-blue: #3767A6;
    --deep-blue: #022873;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    font-family: 'Roboto', sans-serif;
    /* overflow-x: hidden; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--border-radius);
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export default GlobalStyles;
