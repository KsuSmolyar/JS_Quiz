import classNames from 'classnames';
import styles from './button.module.css';
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  to?: string;
};
export const ButtonOrLink = React.memo<ButtonProps>(({text, onClick, className, variant="primary", to,  ...props}) => {
  if (to != null) {
    return (
      <Link
        className={classNames(styles.button, className, {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        })}
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }
  return (
    <button {...props} onClick={onClick} className={classNames(styles.button, className, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary'
    })}>
      {text}
    </button>
  )
})
