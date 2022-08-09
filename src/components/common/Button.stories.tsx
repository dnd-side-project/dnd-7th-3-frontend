import { ComponentProps } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

type ButtonProps = typeof Button;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<ButtonProps> = (
  args: ComponentProps<ButtonProps>,
) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  color: 'orange',
  borderRadius: 24.5,
  disabled: false,
};
