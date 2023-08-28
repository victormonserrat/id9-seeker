import keysOf from 'lib/keys-of'

import theme from './theme'

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`

const media = keysOf(theme.breakpoints).reduce(
  (acc, key) => ({
    ...acc,
    [key]: minWidthQuery(theme.breakpoints[key]),
  }),
  {} as { [key in keyof typeof theme.breakpoints]: string },
)

export default media
