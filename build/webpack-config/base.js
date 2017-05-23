const env = require('../base-config/environment');

const isDev = env.__DEV__;
const envConfig = env.__CONFIG__;

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
      filename: '[name].js',
      path: paths.root(),
      publicPath: '',
    },
    performance: envConfig.performance,
  };
};
