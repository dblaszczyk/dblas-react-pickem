const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js'],
    output: {
        path: 'dist',
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?outputStyle=expanded')
            },
            {
                test: /\.(png|jp*g|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    postcss: function() {
        return [precss, autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            // // Path to the template
            template: './src/index.html',

            // The title to use for the generated HTML document
            title: 'Pickem',

            // Inject all assets into the given template. `true` injects all
            // javascript resources at the bottom of the body element
            inject: true,

            // Allows control of how chunks should be sorted before they are included to the html
            chunksSortMode: 'dependency'
        })
    ]
}
