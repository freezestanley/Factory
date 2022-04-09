import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Example from '../../src/Pages/Team/index'

describe('App', () => {
  test('renders App component', () => {
    render(<Example />)
    expect(screen.getByText('this is Team')).toBeInTheDocument()
  })
})
it('should take a snapshot', () => {
  const { asFragment } = render(<Example />)

  expect(asFragment()).toMatchSnapshot()
})
