import React from 'react';
import ReactDOM from 'react-dom'
import Calculator from './calculator';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Calculator', () => {
  it('should render component without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculator />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('should clean number input', () => {
    const { getByTestId, getByText } = render(<Calculator />)
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('C'))
    expect(getByTestId('txtNumber')).toHaveValue('0')
  })

  it('should 2 + 3 = 5', () => {
    const { getByTestId, getByText } = render(<Calculator />)
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumber')).toHaveValue('5')
  })

  it('should 5 - 3 = 2', () => {
    const { getByTestId, getByText } = render(<Calculator />)
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumber')).toHaveValue('2')
  })

  it('should 6 / 3 = 2', () => {
    const { getByTestId, getByText } = render(<Calculator />)
    fireEvent.click(getByText('6'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumber')).toHaveValue('2')
  })

  it('should 6 * 2 = 12', () => {
    const { getByTestId, getByText } = render(<Calculator />)
    fireEvent.click(getByText('6'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumber')).toHaveValue('12')
  })
})
