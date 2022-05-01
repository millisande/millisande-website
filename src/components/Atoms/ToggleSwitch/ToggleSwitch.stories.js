import React from 'react';

import ToggleSwitch from './ToggleSwitch';

export default {
    title: 'Atom/ToggleSwitch',
    component: ToggleSwitch,
    argTypes: {
        checked: { control: 'boolean' }
    }
};

const Template = args => <ToggleSwitch {...args} />;

export const NotChecked = Template.bind({});
NotChecked.args = {
    checked: false
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};