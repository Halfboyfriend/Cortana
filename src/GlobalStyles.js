// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(80deg, #000000 50%, rgb(4, 4, 40));
    color: #fff;
    margin: 0; /* Remove default margin */
    height: 0; /* Ensure the body fills the viewport height */
  }
`;

export default GlobalStyle;
