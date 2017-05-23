const debug = require('debug')('app:webpack:plugins');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('../base-config/environment');
const isDev = env.__DEV__;
module.exports = paths => {
  const plugins = [
    new webpack.DefinePlugin(env),
    new HtmlWebpackPlugin({
      template: paths.demo('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.ProgressPlugin()
  ];
  if (isDev) {
    debug('Enable HMR,noErrors for development');
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin() // 报错时不退出webpack进程
    );
  } else {
    // } else {
    debug('Enable OccurenceOrder,UglifyJs for production.');
    plugins.push(
      new webpack.optimize.OccurrenceOrderPlugin(), // 根据模块使用情况 排序模块序号
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          drop_console: true,
        },
      })
    );
  }
  return plugins;
};
