import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// ? If our app becomes bigger, we definately wanna use describe() to wrap them into one group
// ! By wrapping our test with describe() we are grouping tests in one group 'Greeting component'

describe('Greeting component', () => {
  test('Renders Hello User as a text', () => {
    // ! Arrange
    render(<Greeting />);
    // ! Act
    // ... nothing
    // ! Assert
    const expectedText = screen.getByText('Hello, User!');
    expect(expectedText).toBeInTheDocument();
  });

  test('renders Text is not changed if the BUTTON was NOT clicked', () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText('not changed', {
      exact: false,
    });

    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders Text is changed if the BUTTON WAS clicked', () => {
    // ! Arrange
    render(<Greeting />);

    // ! Act - here we wanna click our button
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ! Assert
    const paragraphElement = screen.getByText('changed', {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test('if the text It is good to see you is gone', () => {
    // ! Arrange
    render(<Greeting />);

    // ! Act - here we wanna click our button
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ! Assert
    // queryByText() - will return null if it does not find an element
    const outputElement = screen.queryByText('it is good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
