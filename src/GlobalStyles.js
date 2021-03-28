import { createGlobalStyle } from 'styled-components';
import Daisey from './assets/daisy.png';

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body {
    background-color: #a6b6cf;
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    background-image: url(${Daisey}), url(${Daisey}), url(${Daisey});
  background-repeat: no-repeat;
  background-position: 75% 300px, 40% 20%, 10% 80%;
  background-size: 40px 40px, 21px 21px, 200px 200px;
  }
`;
