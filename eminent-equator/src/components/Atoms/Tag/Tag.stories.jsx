import React from 'react';

import Tag from './Tag';

export default {
  title: 'Atom/Tag',
  component: Tag,
};

const Template = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary tag',
};
