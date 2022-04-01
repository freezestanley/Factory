import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Example from '../../index'

describe('App', () => {
  test('renders App component', () => {
    render(<Example />)
    expect(screen.getByText('this is App test 2222')).toBeInTheDocument()
  })
})
it('should take a snapshot', () => {
  const { asFragment } = render(<Example />)

  expect(asFragment()).toMatchSnapshot()
})
