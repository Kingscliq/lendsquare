import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField, {
  TextFieldProps,
} from '../../components/elements/input-field';

describe('TextField Component', () => {
  it('renders without errors', () => {
    render(<TextField />);
  });

  it('renders with a label', () => {
    render(<TextField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(
      <TextField placeholder="Test Placeholder" onChange={handleChange} />
    );

    const inputElement = screen.getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, {
      target: { value: 'test value' },
    });
    expect(inputElement).toHaveValue('test value');
  });

  it('displays error message when error prop is true', () => {
    const defaultProps: TextFieldProps = {};
    render(<TextField {...defaultProps} error message="Test Error" />);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('applies proper styles for error state', () => {
    render(<TextField error />);
    const inputElement = screen.getByPlaceholderText('Enter a value');

    expect(inputElement).toHaveClass('error__border');
  });
});
