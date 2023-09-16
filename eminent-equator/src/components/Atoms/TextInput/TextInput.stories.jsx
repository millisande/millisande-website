import React from 'react';

import TextInput from './TextInput';

export default {
  title: 'Atom/TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  acceptInput: () => {
    console.log('Input accepted');
  },
};
