import classNames from 'classnames';
import styles from './button.module.css';
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary';
};
export const Button = React.memo<ButtonProps>(({text, onClick, className, variant="primary", ...props}) => {
  return (
    <button {...props} onClick={onClick} className={classNames(styles.button, className, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary'
    })}>
      {text}
    </button>
  )
})
