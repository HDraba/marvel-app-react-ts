import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages';

// arrange, act, assert

describe('Home Page', () => {
  test('renders Welcome', () => {
    render(<Home />);

    const welcomeElement = screen.getByText('Welcome');
    expect(welcomeElement).toBeInTheDocument();
  });

  test('has a functioning link for /character', () => {
    render(<Home />);

    const characterLink = screen.getByTestId('characterLink');

    const hrefOfCharacterLink = characterLink.getAttribute('href')
    expect(hrefOfCharacterLink).toBe('/character')
  });
  
  test('has a functioning link for /character', () => {
    render(<Home />);

    const charactersLink = screen.getByTestId('charactersLink');

    const hrefOfCharactersLink = charactersLink.getAttribute('href')
    expect(hrefOfCharactersLink).toBe('/characters')
  });
});
