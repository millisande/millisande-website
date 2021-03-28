import React from 'react';

import Header from './Header';

export default {
  title: 'Organism/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary button',
};
