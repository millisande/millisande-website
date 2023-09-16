import React from 'react';

import Accordion from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => (
  <div style={{ height: '800px', width: '800px', backgroundColor: 'black' }}>
    <Accordion {...args} />
  </div>
);

const ExampleContent = () => (
  <div style={{ height: '400px', width: '600px' }}>
    <p>There are things that you needed to say</p>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'About Page',
  Content: ExampleContent,
};
