import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Box from './index'
import React from 'react'
test('renders learn react link', () => {
  render(<Box/>)
  const linkElement = screen.getByText(/this is Mono/i)
  expect(linkElement).toBeInTheDocument()
})
