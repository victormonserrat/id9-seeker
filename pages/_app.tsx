import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import swrConfig from '~/common/infrastructure/config/swr'
import GlobalStyle from '~/common/infrastructure/styles/global'
import theme from '~/common/infrastructure/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={swrConfig}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </SWRConfig>
)

export default App
