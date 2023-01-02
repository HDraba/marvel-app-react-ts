import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('has hello world', () => {
    render(<Greeting />);

    const element = screen.getByText('hello world', { exact: true });
    expect(element).toBeInTheDocument();
  });

  test("doesn't show blue", () => {
    render(<Greeting />)  
    
    const element = screen.queryByText('Blue!')
    expect(element).toBeNull()
  })

  test("does show blue if button clicked", () => {
    render(<Greeting />)

    const button = screen.getByRole('button')
    userEvent.click(button)
  
    const outputElement = screen.getByText('Blue!')
    expect(outputElement).toBeInTheDocument()
  })

});
