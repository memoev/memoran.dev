const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  devServer: {
    proxy: {
      '/api': {
        target: 'https://memorandev.memoev.vercel.app/app'
      }
    }
  }
}