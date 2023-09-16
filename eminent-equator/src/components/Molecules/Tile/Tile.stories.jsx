import React from 'react';

import Tile from './Tile';

export default {
  title: 'Molecules/Tile',
  component: Tile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Tile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Generic Banking App',
  info:
    'A React Native application designed for a national banks many users to coordinate their finances.\n\nMillisande coordinated the team across the full stack',
  image:
    'https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_1280.jpg',
  tags: [
    {
      text: 'React',
      type: 'language'
    },
    {
      text: 'React-Native',
      type: 'language'
    },
    {
      text: 'NodeJS',
      type: 'language'
    },
    {
      text: 'AWS',
      type: 'cloud',
    }
  ]
};
