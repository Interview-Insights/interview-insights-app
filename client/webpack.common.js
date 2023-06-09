const path = require('path');
const miniSVGDataURI = require('mini-svg-data-uri');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.SUPABASE_URL, process.env.ANON_KEY);

const common = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    clean: true,
  },
  stats: {
    preset: 'errors-warnings',
    builtAt: true,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/normalize.css'),
        ],
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          dataUrl(content) {
            return miniSVGDataURI(content.toString());
          },
          filename: 'static/[name][ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'static/index.html'),
      filename: 'index.html',
    }),
    new DefinePlugin({
      'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
      'process.env.ANON_KEY': JSON.stringify(process.env.ANON_KEY),
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
};

module.exports = common;
