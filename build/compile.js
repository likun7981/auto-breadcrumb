const debug = require('debug')('app:bin:compile');
const chalk = require('chalk');
const compiler = require('../build/compiler');
const env = require('../build/base-config/environment');
const webpackConfig = require('../build/webpack-config');

const startCompile = () => {
  debug(`Start compile with env '${chalk.green(process.env.NODE_ENV)}'`);
  return Promise.resolve()
    .then(() => compiler(webpackConfig))
    .then(stats => {
      if (stats.hasWarnings() && env.isProd) {
        throw new Error('Production not allow warnig, exit .');
      }
      return stats;
    })
    .then(stats => {
      debug(stats.toString(env.__CONFIG__.stats));
      debug('Success compile !!');
    })
    .catch(error => {
      debug('Compile with Error.', error);
      process.exit();
    });
};

// =====
// go!
// =====

startCompile();
