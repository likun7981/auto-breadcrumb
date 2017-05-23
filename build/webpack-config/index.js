const debug = require('debug')('app:webpack:index');
const paths = require('../base-config/path');

const alias = require('./alias')(paths);
const base = require('./base')(paths);
const plugins = require('./plugins')(paths);
const rules = require('./loaders')();
debug('Creating configuration.');
module.exports = Object.assign(
  {
    plugins,
    resolve: {
      alias,
    },
    module: {
      rules,
    },
  },
  base
);
