import defaultConfig from '~/common/infrastructure/config/swr'

const config = {
  ...defaultConfig,
  provider: () => new Map(),
}

export default config
