import { Meta, Story } from '@storybook/react';
import React from 'react';
import ToggleButton, { ToggleButtonProps } from '.';

export default {
  title: 'components/ToggleButton',
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

// Basic
export const Basic: Story<ToggleButtonProps> = Template.bind({});
Basic.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: '.toggle-button',
      },
      clicked: {
        click: '.toggle-button',
      },
    },
  },
};
Basic.args = {};
