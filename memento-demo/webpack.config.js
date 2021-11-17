const path = require('path')

const tsRule = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}
const rules = [
  tsRule,
]

module.exports = () => {
  return {
    entry: './src/Presenter.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: { rules },
    devServer: {
      open: true, // opens the browser
      port: 3000,
      compress: true,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  }
}