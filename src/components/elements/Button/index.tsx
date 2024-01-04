import React, { ReactNode } from 'react';
import BtnLoader from './loader';
import styles from './button.module.scss';

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
  loadingText,
  className,
  loadingIcon,
  btnIcon,
  variant,
  btnLeftIcon,
  btnRightIcon,
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
        backgroundColor: loading || disabled ? '#363641' : '',
      }}
    >
      {loading ? (
        <div className="btn-loader">
          <BtnLoader />
        </div>
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

export default Button;
