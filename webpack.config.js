const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,

    // now enabled by default in new versions of webpack
    // watchContentBase: true,
  },
  module: {
    // how webpack should handle different file types
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
