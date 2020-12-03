const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    main: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './client/index.tsx',
    ],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'server/public/assets'),
    publicPath: '/assets/',
  },
  resolve: {
    alias: {
      // https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    // https://github.com/lodash/lodash-webpack-plugin
    new ManifestPlugin({
      fileName: 'webpack.manifest.json',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'client'),
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
