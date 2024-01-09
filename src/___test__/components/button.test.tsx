import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../components/elements/button-c';

describe('Button Component', () => {
  const defaultProps = {
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
    render(<Button {...defaultProps} loading role="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button {...defaultProps} className="custom-class" role="button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
