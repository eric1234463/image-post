import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '.';
import { renderStyledComponent } from '../../../test/utils';

test('renders Button with isLoading', () => {
  const props = {
    isLoading: true
  }
  renderStyledComponent({ Component: Button, props })
  expect(() => {  screen.getByTestId('loading-spinner') }).not.toThrowError()
})

test('renders Button with isLoading', () => {
  const props = {
    isLoading: false
  }
  renderStyledComponent({ Component: Button, props })
  expect(() => { screen.getByTestId('loading-spinner') }).toThrowError()
})




