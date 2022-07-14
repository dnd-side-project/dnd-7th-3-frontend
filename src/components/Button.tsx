import type { FC } from 'react';

export interface ButtonProps{
    text: string;
}

const Button:FC<ButtonProps> = ({ text }) => (
  <button type="button">
    <span>{text}</span>
  </button>
);

export default Button;
