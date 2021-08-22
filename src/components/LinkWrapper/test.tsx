import LinkWrapper from '.'
import { render, screen } from '@testing-library/react'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/url">Some children</LinkWrapper>)

    const children = screen.getByText(/some children/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/url')
  })
})
