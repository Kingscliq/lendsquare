import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Button, ButtonProps } from '@components/elements/button-c';
// import { Button, ButtonProps } from './Button';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    label: 'Click me',
    onClick: jest.fn(),
  };

  it('renders button with label', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('disables button when loading prop is true', () => {
    render(<Button {...defaultProps} loading />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
