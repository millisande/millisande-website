import Daisy from '../assets/daisy.png';

const lightBlue = '#BDC8DB';
const darkBlue = '#283448';
const lightPeach = '#edb089';

const light = {
  background: {
    primary: lightBlue,
    secondary: lightPeach,
  },
  borders: {
    primary: 'white',
    secondary: 'white',
  },
  tags: {
    language: '#3C4E6D',
    cloud: darkBlue,
  },
  text: {
    primary: darkBlue,
    secondary: darkBlue,
    tertiary: 'white',
  },
  button: {
    primary: darkBlue,
    hover: {
      primary: '#171F2C',
    },
  },
  daisy: Daisy,
};

export default light;
