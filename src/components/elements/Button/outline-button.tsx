import React from 'react';
import { ButtonProps } from '.';
import { StatusStyleProps } from '../badge';
import styles from './button.module.scss';

const OutlineButton: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  variant = 'default',
}) => {
  const btnVariants: StatusStyleProps = {
    primary: styles.btn__primary,
    secondary: styles.btn__secondary,
    danger: styles.btn__danger,
    default: styles.btn__default,
  };

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`${styles.variable__btn} ${btnVariants[variant]}`}
    >
      {label}
    </button>
  );
};

export default OutlineButton;
