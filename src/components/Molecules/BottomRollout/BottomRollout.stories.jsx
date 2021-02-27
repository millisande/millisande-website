import React from 'react';

import Rollout from './BottomRollout';

export default {
  title: 'Molecules/BottomRollout',
  component: Rollout,
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
  placement: 'default',
};
