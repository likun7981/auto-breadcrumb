const NODE_ENV = process.env.NODE_ENV || 'development';
const envConfigs = require('./configs');


module.exports = {
  /**
   * why?  you can see:
   * https://fb.me/react-minification
   * http://stackoverflow.com/questions/30030031
   */
  'process.env': {
    NODE_ENV: JSON.stringify(NODE_ENV),
  },
  __ENV__: NODE_ENV,
  __DEV__: NODE_ENV === 'development',
  __PRO__: NODE_ENV === 'production',
  __TEST__: NODE_ENV === 'test',
  __CONFIG__: Object.assign(envConfigs.defaults, envConfigs[NODE_ENV] || {}),
};
