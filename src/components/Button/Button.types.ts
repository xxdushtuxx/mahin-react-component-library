import { type MouseEventHandler } from 'react';

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
