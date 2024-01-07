import React, { ReactNode } from 'react';
import styles from './button.module.scss';
import { StatusStyleProps } from '../badge';

interface ButtonProps extends Partial<HTMLButtonElement> {
  label?: string | ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: string;
  btnIcon?: string;
  variant?: string;
  btnLeftIcon?: string;
  btnRightIcon?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  className,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[`${styles.button}`, className].join(' ')}
      style={{
        cursor: loading || disabled ? 'not-allowed' : '',
        opacity: loading || disabled ? '.68' : '1',
        backgroundColor: loading || disabled ? 'rgba(57, 205, 204, 0.06)' : '',
        color: loading || disabled ? 'rgba(12, 33, 28, 0.791)' : 'white',
      }}
    >
      {loading ? (
        <div className="btn-loader">Loading...</div>
      ) : (
        <div className="btn-body">
          <p className="text-center text-sm md:text-base whitespace-nowrap">
            {label || 'Button Text'}
          </p>
        </div>
      )}
    </button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  variant = 'default',
}) => {
  const btnVariants: StatusStyleProps = {
    primary: styles.btn__primary,
    secondary: styles.btn__secondary,
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
export default Button;
