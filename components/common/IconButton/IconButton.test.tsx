import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton Component', () => {
  test('renders button with children', () => {
    render(<IconButton>Hello</IconButton>);

    const buttonElement: HTMLElement = screen.getByText('Hello');
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<IconButton className="custom-class">Click me</IconButton>);

    const buttonElement: HTMLElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<IconButton onClick={onClickMock}>Click me</IconButton>);

    const buttonElement: HTMLElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
