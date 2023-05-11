import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Estilos globais aqui */
  :root {
    --border-radius: 0.5rem;
    --font-sans: 'Roboto' , sans-serif;
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
    /* overflow-x: hidden; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
