// @ts-check

"use strict";

const path = require("path");

/** @typedef {import("webpack").Configuration} WebpackConfig */

/** @type WebpackConfig */
const extensionConfig = {
  target: "node",
  mode: "none",

  entry: "./src/extension.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
  },
  // VS Code provides this module at runtime, so webpack must not bundle it.
  externals: {
    vscode: "commonjs vscode",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  devtool: "nosources-source-map",
  // VS Code's problem matcher reads webpack's infrastructure logs.
  infrastructureLogging: {
    level: "log",
  },
};
module.exports = [extensionConfig];
