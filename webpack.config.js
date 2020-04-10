const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Med8',
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    hash: true,
    inject: 'body'
});

const HotReloader = new webpack.HotModuleReplacementPlugin();

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
        path: __dirname + '/dist',
        filename: "bundle.js",
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: __dirname + "/dist/",
        compress: true,
        host: "0.0.0.0",
        hot: true,
        inline: true,
        progress:true,
        overlay: true,
        historyApiFallback: true,
    },
    module: {
        loaders: [
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
        htmlWebpackPlugin,
        HotReloader,
        new ModernizrWebpackPlugin(modernizrConfig),
        new CopyWebpackPlugin([
            { from: 'manifest.json' },
            { from: 'favicon.ico' }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};
