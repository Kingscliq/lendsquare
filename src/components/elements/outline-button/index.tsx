import React from 'react'
import { StatusStyleProps } from '../badge'
import styles from './outline-button.module.scss'
import { ButtonProps } from '../button-c'

const OutlineButton: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  variant = 'default',
  disabled,
}) => {
  const btnVariants: StatusStyleProps = {
    primary: styles.btn__primary,
    secondary: styles.btn__secondary,
    danger: styles.btn__danger,
    default: styles.btn__default,
  }

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`${styles.variable__btn} ${btnVariants[variant]}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default OutlineButton
