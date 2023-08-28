import { devices, PlaywrightTestConfig } from '@playwright/test'
import path from 'path'

const PORT = process.env.PORT || 3000

const baseURL = `http://localhost:${PORT}`

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
  testDir: path.join(__dirname, '__e2e__'),
  timeout: 30 * 1000,
  use: {
    baseURL,
    trace: 'retry-with-trace',
  },
  webServer: {
    command: 'npm run dev',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    url: baseURL,
  },
}
export default config
