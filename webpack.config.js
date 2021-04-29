const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { LoaderTargetPlugin } = require("webpack");
const { loader } = require("mini-css-extract-plugin");
const urlLoader = require("url-loader");

const devMode = process.env.NODE_ENV !== "development";

module.exports = {
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          //if im in produccion load de css files
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map",
};
