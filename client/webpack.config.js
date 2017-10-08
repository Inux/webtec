const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './index.js',
        './styles/index.css' 
    ],
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }],
        rules: [
            {
              test: /\.modernizrrc.js$/,
              use: [ 'modernizr-loader' ]
            },
            {
              test: /\.modernizrrc(\.json)?$/,
              use: [ 'modernizr-loader', 'json-loader' ]
            },
            {
              test: /\.css$/,
              use: [{
                  loader: 'style-loader'
              }, {
                  loader: 'css-loader'
              }]
            }
        ]
    },
        resolve: {
        alias: {
          modernizr$: path.resolve(__dirname, ".modernizrrc")
        }
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webtec',
            template: 'index-template.ejs'
        })       
    ]
}
