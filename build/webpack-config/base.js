const debug = require('debug')('app:webpack:base');
const env = require('../base-config/environment');

const isDev = env.__DEV__;
const NODE_ENV = env.__ENV__;
const envConfig = env.__CONFIG__;

const pkg = require('../../package.json');

module.exports = paths => {
  const App = [paths.demo('index.js')];
  if (isDev) {
    App.unshift('webpack-hot-middleware/client');
  }
  return {
    context: paths.root(),
    entry: {
      app: App,
    },
    devtool: isDev ? 'source-map' : false,
    output: {
      filename: `[name].${envConfig.hash}${isDev ? '' : `.${NODE_ENV}`}.js`,
      path: paths.dist(NODE_ENV),
      publicPath: '',
    },
    performance: envConfig.performance,
  };
};
