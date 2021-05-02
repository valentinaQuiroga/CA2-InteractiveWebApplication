/* ***************************************************************************************
 *    Title: <Core Version of NODE JS, JAVASCRIPT, and interactive CARDS>
 *    Author: <Jesus Fazt - Fazt Code>
 *    Date: <February 2019>
 *    Code version: <1>
 *    Availability: <https://www.youtube.com/watch?v=Fs1G1BcP4BI&t=252s>
 *
 *************************************************************************************** */
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
