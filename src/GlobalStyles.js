import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  body {
    background-color: black;
    font-family: VT323, monospace;
    color: #00FF66;
    letter-spacing: 2px;
  }

  button {
    border-color: #00FF66;
  }
`;
