import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Hello</Button>);

    const buttonElement: HTMLElement = screen.getByText('Hello');
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);

    const buttonElement: HTMLElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement: HTMLElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
