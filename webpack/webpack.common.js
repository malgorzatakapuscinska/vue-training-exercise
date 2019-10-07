const Path = require('path')
const DotenvFlowPlugin = require('dotenv-flow-webpack')

module.exports = {
  entry: {
    main: Path.resolve(__dirname, '../src/scripts/main.js'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new DotenvFlowPlugin(),
  ],
}
