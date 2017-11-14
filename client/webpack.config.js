const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Build index.js and index.html
const index = {
    entry: [
        './index.js',
        './styles/layout.css',
        './styles/content.css',
        './styles/nav.css',
        './styles/footer.css',
        './styles/device_label.css'
    ],
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: "index.js",
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }],
        rules: [
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
    node: {
        fs: "empty"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WEBTEC website of Steve Ineichen',
            author: 'Steve Ineichen',
            copyright: '&copy; Steve Ineichen 2017',
            template: 'index-template.ejs'
        })  
    ]
}

//Build home.html and home.js
const home = {
    entry: [
        './pages/home/home.js',
    ],
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: "home.js",
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
            filename: 'home.html',
            template: './pages/home/home-template.ejs'
        })  
    ]
}

//Build canvas.html and canvas.js
const canvas = {
    entry: [
        './pages/canvas/canvas.js',
    ],
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: "canvas.js",
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'canvas.html',
            template: './pages/canvas/canvas-template.ejs'
        })  
    ]
}

//Build formular.html and formular.js
const formular = {
    entry: [
        './pages/formular/formular.js',
    ],
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: "formular.js",
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'formular.html',
            template: './pages/formular/formular-template.ejs'
        })  
    ]
}

module.exports = [index, home, canvas, formular];
