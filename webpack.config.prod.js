const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Med8 - PROD',
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    hash: true,
    inject: 'body'
});

const modernizrConfig = {
    'options': [
        'setClasses'
    ],
    'feature-detects': [
        'input',
        'canvas',
        'css/resize'
    ],
    'htmlWebpackPlugin': htmlWebpackPlugin,
    'minify': {
        output: {
            comments: true,
            beautify: true
        }
    }
};

module.exports = {
    context: __dirname + '/app',
    entry: __dirname + '/app/App.js',
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.mp4$/, loader: 'file-loader'},
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[hash].[ext]",
                    },
                },
            },
            { test: /\.eot$/, loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject' },
            { test: /\.woff2$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff2' },
            { test: /\.woff$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?limit=100000&mimetype=application/font-ttf' },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        htmlWebpackPlugin,
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),*/
        new webpack.optimize.AggressiveMergingPlugin(),
        new ModernizrWebpackPlugin(modernizrConfig),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
            { from: 'manifest.json' },
            { from: 'favicon.ico' },
        ]),
        new CompressionWebpackPlugin({
            test: /\.(js|css)$/
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json', // Not to confuse with manifest.json
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                ie8: false,
                output: {
                    comments: false
                }
            }
        })
    ],
};
