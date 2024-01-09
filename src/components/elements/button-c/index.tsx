import React, { ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends Partial<HTMLButtonElement> {
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

export const Button: React.FC<ButtonProps> = ({
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
      data-testid="btn"
    >
      {loading ? (
        <p className="btn-loader">Loading...</p>
      ) : (
        <div>
          <p>{label || 'Button Text'}</p>
        </div>
      )}
    </button>
  );
};
