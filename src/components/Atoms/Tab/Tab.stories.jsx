import React from 'react';

import Tab from './Tab';

export default {
  title: 'Atom/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'About Page',
};

export const Left = Template.bind({});
Left.args = {
  title: 'About Page',
  rotation: 90,
};
