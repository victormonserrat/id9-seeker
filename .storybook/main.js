const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: '@storybook/react',
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]

    return config
  },
}
