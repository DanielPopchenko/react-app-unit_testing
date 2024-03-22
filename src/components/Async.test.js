import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async from './Async';

describe('Async component', () => {
  // ! findAllByRole waits for some time looking for elements, so it returns a Promise
  // ! it means that we should make it async and await for the result
  test('renderes posts if request succeeds', async () => {
    // Creates a mock function. Optionally takes a mock implementation.
    // ! Here we are simulating the success and don`t send an actual request to the server
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
