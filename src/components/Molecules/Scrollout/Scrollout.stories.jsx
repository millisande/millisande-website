import React from 'react';

import Scrollout from './Scrollout';

export default {
  title: 'Molecules/Scrollout',
  component: Scrollout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => (
  <div style={{ height: '800px', width: '800px', backgroundColor: 'black' }}>
    <Rollout {...args} />
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

export const Top = Template.bind({});
Top.args = {
  title: 'About Page',
  Content: ExampleContent,
  rotation: 180,
};

export const Left = Template.bind({});
Left.args = {
  title: 'About Page',
  Content: ExampleContent,
  rotation: 90,
};

export const Right = Template.bind({});
Right.args = {
  title: 'About Page',
  Content: ExampleContent,
  rotation: 270,
};
