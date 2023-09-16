import React from 'react';

import Title from './Title';

export default {
  title: 'Atom/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => (
    <Title {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  title: 'H1 main title',
  type: 'h1'
};

export const H2 = Template.bind({});
H2.args = {
  title: 'H2 content title',
  type: 'h2'
};