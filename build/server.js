const express = require('express');
const debug = require('debug')('app:build:server');
const env = require('./base-config/environment');
const paths = require('./base-config/path');

const app = express();

// Apply Webpack HMR Middleware
if (env.__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack-config');
  const compiler = webpack(webpackConfig);
  debug('Apply webpack dev and HMR middleware');
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      lazy: false,
      stats: env.__CONFIG__.stats,
      log: debug,
    })
  );
  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: debug,
    })
  );
} else {
  debug('Server is being run outside of live development mode !');
  app.use(express.static(paths.dist()));
}

module.exports = app;
