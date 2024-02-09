const path = require('path');

module.exports = {
  entry: {
    app: './js/basics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/basics.js',
  },
};
