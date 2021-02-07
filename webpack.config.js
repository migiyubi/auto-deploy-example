const path = require('path');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  context: src,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  }
};
