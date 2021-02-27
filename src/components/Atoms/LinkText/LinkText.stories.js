import React from 'react';

import LinkText from './LinkText';

export default {
  title: 'Atom/LinkText',
  component: LinkText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <LinkText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a link',
};
