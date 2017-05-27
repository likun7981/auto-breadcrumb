module.exports = () => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            minimize: true,
          },
        },
      ],
    },
  ];
  return rules;
};
