import * as NextImage from 'next/image'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/common/infrastructure/styles/global'
import theme from '~/common/infrastructure/styles/theme'

const withThemeProvider = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: { current: 'dark' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'requiredFirst',
  },
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
