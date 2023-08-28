import Card from '~/films/infrastructure/components/Card'
import { render } from '~/tests/utils'

describe('Film Card', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Card
        coverUrl="https://cover.url"
        episode="Episode"
        title="Title"
        release="Release"
      />,
    )

    expect(container).toMatchSnapshot('Regular')
  })

  it('renders with body correctly', () => {
    const { container } = render(
      <Card
        coverUrl="https://cover.url"
        episode="Episode"
        title="Title"
        release="Release"
        body="Body"
      />,
    )

    expect(container).toMatchSnapshot('With body')
  })
})
