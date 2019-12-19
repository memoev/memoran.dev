const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8080'
      }
    }
  }
}