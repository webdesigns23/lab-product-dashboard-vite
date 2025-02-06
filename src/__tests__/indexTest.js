import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'
import { sampleProducts } from './helpers'

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)
  sampleProducts.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument()
  })
})

test('applies conditional styling for out-of-stock products', () => {
  render(<App />)
  const outOfStockProduct = screen.getByText(/Phone/i)
  expect(outOfStockProduct).toHaveClass('outOfStock') // Ensure correct class is applied
})

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />)
  const removeButtons = screen.getAllByText(/Remove/i)

  if (removeButtons.length > 0) {
    fireEvent.click(removeButtons[0])
    expect(removeButtons[0]).not.toBeInTheDocument() // Ensure product is removed
  }
})
