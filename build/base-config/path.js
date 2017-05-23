const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../..');

function base() {
  const args = [ROOT_PATH].concat([].slice.call(arguments)); // eslint-disable-line
  return path.resolve.apply(path, args); // eslint-disable-line
}

module.exports = {
  root: base,
  src: base.bind(null, 'src'),
  dist: base.bind(null, 'dist'),
  demo: base.bind(null, 'demo'),
};
