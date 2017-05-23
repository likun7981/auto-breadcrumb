module.exports = () => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    },
  ];
  return rules;
};
