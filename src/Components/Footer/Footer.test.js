import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './index'
import React from 'react'

test('renders learn react link', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/this is Footer/i)
  expect(linkElement).toBeInTheDocument()
})
