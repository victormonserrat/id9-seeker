import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import theme from '~/common/infrastructure/styles/theme'

import swrConfig from './config/swr'

const Provider = ({ children }: { children: ReactNode }) => (
  <SWRConfig value={swrConfig}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </SWRConfig>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Provider, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { userEvent }
