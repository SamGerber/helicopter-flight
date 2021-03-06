var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/gameView.js",
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js"]
  }
};
