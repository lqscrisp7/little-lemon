import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Reserve A Table');
  expect(headingElement).toBeInTheDocument();
});

test('submit form', () => {
  render(<App />);
  const handleSubmit = jest.fn()
  const submitBtn = screen.getByRole("button")
  fireEvent.click(submitBtn)
  expect(handleSubmit).not.toHaveBeenCalled()
});