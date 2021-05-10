const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      hash: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};
