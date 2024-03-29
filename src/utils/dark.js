import Daisy from '../assets/daisy-michaelmas.png';

const lightBlue = '#BDC8DB';
const darkBlue = '#283448';
const darkPeach = '#6F3A1B';

const dark = {
  background: {
    primary: darkBlue,
    secondary: darkPeach,
    tertiary: 'rgba(111, 58, 27, 0.5)',
  },
  borders: {
    primary: '#171F2C',
    secondary: lightBlue,
  },
  tags: {
    language: lightBlue,
    cloud: 'white',
  },
  text: {
    primary: lightBlue,
    secondary: 'white',
    tertiary: darkBlue,
    link: lightBlue,
  },
  button: {
    primary: lightBlue,
    hover: {
      primary: 'white',
    },
  },
  daisy: Daisy,
};

export default dark;
