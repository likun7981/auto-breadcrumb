module.exports = {
  development: {
    performance: {
      hints: false,
      maxAssetSize: 2000000, // 2.5M
    },
  },
  production: {
    performance: {
      hints: 'error',
      maxEntrypointSize: 1500000, // 1.5M
    },
    stats: {
      chunkModules: false,
      colors: true,
      chunks: false,
      children: false,
    },
  },
  defaults: {
    stats: {
      chunkModules: false,
      colors: true,
      chunks: false,
    },
    hash: '[hash:8]',
    vendors: ['react', 'react-redux', 'react-router-dom', 'redux', 'react-dom'],
    postcss: [
      require('autoprefixer')({
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      }),
    ],
  },
};
