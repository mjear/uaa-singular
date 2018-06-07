const path = require('path');

mode = 'none'

var htmlFileReader =  {
  rules: [
    {
      test: /\.(html)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
              name: '[name].html'
          }
        }
      ]
    },
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
              {
                  loader: 'babel-loader',
                  options: {
                      plugins: ['babel-plugin-transform-runtime']
                  }
              }
          ]
      }
  ]
};

module.exports = [
  {
    module: htmlFileReader,
    entry:
      ['./src/singular.js'],
    output: {
      filename: 'singular.js',
      path: path.resolve(__dirname, 'singular'),
      library: 'Singular',
      libraryExport: 'default'
    }
  },
  {
    module: htmlFileReader,
    entry: ['./src/rpFrame.js'],
    output: {
      filename: 'rpFrame.js',
      path: path.resolve(__dirname, 'singular'),
      library: 'RPFrame',
      libraryExport: 'default'
    }
  }
];
