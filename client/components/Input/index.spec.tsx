import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Input from '.';
import { renderStyledComponent } from '../../../test/utils';

test('renders Input with value & label no error', () => {
  const props = {
    value: '123',
    error: null,
    label: 'Email',
  }
  renderStyledComponent({ Component: Input, props })
  const inputElement = screen.getByTestId('input');
  expect(inputElement.value).toEqual(props.value)
  const labelElement = screen.getByTestId('label');
  expect(labelElement.innerHTML).toEqual(props.label)
  expect(() => { screen.getByTestId('error-label') }).toThrowError()
})

test('renders Input with value & label no error', () => {
  const props = {
    value: '123',
    error: 'Email is Required',
    label: 'Email',
  }
  renderStyledComponent({ Component: Input, props })
  const inputElement = screen.getByTestId('input');
  expect(inputElement.value).toEqual(props.value)
  const labelElement = screen.getByTestId('label');
  expect(labelElement.innerHTML).toEqual(props.label)
  const errorLabelElement = screen.getByTestId('error-label');
  expect(errorLabelElement.innerHTML).toEqual(props.error)

})
