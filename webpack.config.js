// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");

// const isProduction = process.env.NODE_ENV == "production";

// const config = {
//   entry: "./index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     open: true,
//     host: "localhost",
//   },
//   plugins: [
//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'modules')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      DateTime: 'luxon/src/DateTime.js',
    }),
  ],
};
