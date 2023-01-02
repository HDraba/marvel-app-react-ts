import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../pages/auth/login';
import userEvent from '@testing-library/user-event';

// arrange, act, assert

describe('Login Page', () => {
  test('has username input', () => {
    render(<Login />);

    const usernameInputElement = screen.getByTestId('usernameInput');
    expect(usernameInputElement).toBeInTheDocument();
  });

  test('has password input', () => {
    render(<Login />);

    const passwordInputElement = screen.getByTestId('passwordInput');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('has username validation', () => {
    render(<Login />);
    const usernameInputDivElement = screen.getByTestId('usernameInputDiv');
    const usernameInputElement = screen.getByTestId('usernameInput');
    const passwordInputElement = screen.getByTestId('passwordInput');

    userEvent.click(usernameInputElement);
    userEvent.click(passwordInputElement);

    expect(usernameInputDivElement.classList.contains('invalid')).toBe(true);
  });

  test('has password validation', () => {
    render(<Login />)

    const passwordInputDivElement = screen.getByTestId('passwordInputDiv');
    const usernameInputElement = screen.getByTestId('usernameInput');
    const passwordInputElement = screen.getByTestId('passwordInput');

    userEvent.click(passwordInputElement);
    userEvent.click(usernameInputElement);

    expect(passwordInputDivElement.classList.contains('invalid')).toBe(true);
  })
  
  test('has working input field', () => {
    render(<Login />)

    const usernameInputElement: HTMLInputElement = screen.getByTestId('usernameInput');

    userEvent.type(usernameInputElement, 'Hello World')

    expect(usernameInputElement.value).toBe('Hello World')
  })
});

