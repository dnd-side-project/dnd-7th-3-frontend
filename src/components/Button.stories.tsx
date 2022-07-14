import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = ({ text }:ButtonProps) => <Button text={text} />;

export const Default = Template.bind({});

Default.args = {
  text: 'button',
};
