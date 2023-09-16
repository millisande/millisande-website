import React from 'react';

import TabContent from './TabContent';

export default {
  title: 'Atom/TabContent',
  component: TabContent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const ExampleContent = () => (
  <div style={{ height: '400px', width: '600px' }}>
    <p>There are things that you needed to say</p>
  </div>
);

const Template = args => (
  <div style={{ height: '800px', width: '800px', backgroundColor: 'black' }}>
    <TabContent><ExampleContent /></TabContent>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <ExampleContent />,
};
