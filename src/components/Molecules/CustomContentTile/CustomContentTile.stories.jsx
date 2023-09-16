import React from 'react';

import Tile from './CustomContentTile';

export default {
  title: 'Molecules/CustomContentTile',
  component: Tile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Tile {...args}><p>This is content</p></Tile>;

const exampleArgs = {
  title: 'Generic Banking App',
  tags: [
    {
      text: 'React',
      type: 'language'
    },
    {
      text: 'React-Native',
      type: 'language'
    },
    {
      text: 'NodeJS',
      type: 'language'
    },
    {
      text: 'AWS',
      type: 'cloud',
    }
  ]
}

export const Primary = Template.bind({});
Primary.args = exampleArgs;

export const withLinks = Template.bind({});
withLinks.args = {
  ...exampleArgs,
  links: [
    {
      text: 'BBC',
      url: 'www.bbc.com'
    }
  ]
}

export const withTLDR = Template.bind({});
withTLDR.args = { ...exampleArgs, tldr: 'This is a TLDR' };

export const withImage = Template.bind({});
withImage.args = { ...exampleArgs, image: 'https://picsum.photos/200' };
