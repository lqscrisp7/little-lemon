import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './booking/BookingPage';

test('renders heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText('Reserve A Table');
  expect(headingElement).toBeInTheDocument();
});

test('submit form', () => {
  render(<BookingPage />);
  const handleSubmit = jest.fn()
  const submitBtn = screen.getByRole("button")
  fireEvent.click(submitBtn)
  expect(handleSubmit).not.toHaveBeenCalled()
});

test('applies correct attributes to HTML element', () => {
  render(<BookingPage />);

  const element = screen.getByLabelText(/contact number/i);
  expect(element).toHaveAttribute('id', 'contact');
});

test('form validation - empty contact', () => {
  render(<BookingPage />);
  const handleClick = jest.fn();
  fireEvent.change(screen.getByLabelText(/contact number/i), {
    target: { value: '' },
  });
  fireEvent.click(screen.getByText(/reserve now/i));
  expect(handleClick).not.toHaveBeenCalled();
});

test('form validation - invalid contact', () => {
  render(<BookingPage />);
  const handleClick = jest.fn();

  fireEvent.change(screen.getByLabelText(/contact number/i), {
    target: { value: '1234' },
  });
  fireEvent.click(screen.getByText(/reserve now/i));

  expect(handleClick).not.toHaveBeenCalled();

});

test('form validation - valid contact', () => {
  render(<BookingPage />);

  fireEvent.change(screen.getByLabelText(/contact number/i), {
    target: { value: '0123456789' },
  });
  fireEvent.click(screen.getByText(/reserve now/i));

  expect(screen.queryByRole('error')).not.toBeInTheDocument();
});