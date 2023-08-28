import Search from '~/common/infrastructure/components/Search'
import { render } from '~/tests/utils'

describe('Search', () => {
  it('renders correctly', () => {
    const { container } = render(<Search />)

    expect(container).toMatchSnapshot('Regular')
  })

  it('renders disabled correctly', () => {
    const { container } = render(<Search disabled />)

    expect(container).toMatchSnapshot('Disabled')
  })
})
