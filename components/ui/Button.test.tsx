import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

// arrange, act, assert

describe('Button Component', () => {
  test('has working onClick', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    
    expect(onClick).toHaveBeenCalled();
  });
});
