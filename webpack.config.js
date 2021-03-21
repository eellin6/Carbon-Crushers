/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: ['ts-loader', 'source-map-loader']
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
            },
          },
        ],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],

};
