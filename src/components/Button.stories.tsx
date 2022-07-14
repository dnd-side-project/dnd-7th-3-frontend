import { ComponentProps } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

type ButtonProps = typeof Button;

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<ButtonProps>;

const Template: ComponentStory<ButtonProps> = (
  args: ComponentProps<ButtonProps>,
) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'button',
};
