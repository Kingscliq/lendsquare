import React, { ComponentProps, JSXElementConstructor } from 'react';
import styles from './text-field.module.scss';

interface TextFieldProps extends Partial<HTMLInputElement> {
  onClick?: () => void;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  success?: boolean;
  label?: string;
  inputRef?: string;
  message?: string;
  props?: ComponentProps<JSXElementConstructor<any>>;
  inputClass?: string;
}
const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  label,
  inputRef,
  message,
  inputClass,
  props,
  disabled,
}) => {
  return (
    <div className="w-full">
      <div>
        {label && (
          <label
            className="text-primary font-bold"
            style={{ color: error ? '#e11900 ' : '0' }}
          >
            {label}
          </label>
        )}
        <div
          className={[
            className,
            `${styles.text__field__container}
              ${error ? 'error' : '0'}`,
          ].join(' ')}
        >
          <input
            type={type || 'text'}
            className={[inputClass, styles.text__field].join(' ')}
            placeholder={placeholder || 'Enter a value'}
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            disabled={disabled}
            ref={inputRef}
            {...props}
          />
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default TextField;
