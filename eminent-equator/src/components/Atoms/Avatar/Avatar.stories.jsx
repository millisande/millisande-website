import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Atom/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: 'https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004282_1280.jpg',
};
