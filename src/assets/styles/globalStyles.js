import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-size: 1.6rem;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
