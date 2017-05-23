const webpack = require('webpack');
const debug = require('debug')('app:build:compiler');
const chalk = require('chalk');

const webpackCompiler = (webpackConfig) => {
  const compile = webpack(webpackConfig);
  return new Promise((resolve, reject) => {
    compile.run((err, stats) => {
      if (err) {
        debug('Webpack compiler with a fatal error.', err);
        return reject(err);
      }
      const jsonStats = stats.toJson();
      if (stats.hasErrors()) {
        debug('Webpack compile with some errors.');
        debug(chalk.red(jsonStats.errors.join('\n')));
        return reject(new Error('Webpack compiler with some errors.'));
      } else if (stats.hasWarnings()) {
        debug('Webpack compile with some warnings.');
        debug(chalk.yellow(jsonStats.warnings.join('\n')));
      } else {
        debug('Webpack compile no Errors or no Warnings');
      }
      return resolve(stats);
    });
  });
};

module.exports = webpackCompiler;
