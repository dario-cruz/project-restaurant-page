const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCDNInject = require('webpack-cdn-inject')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CarbHouse: Breads and Pastries!',
        }),
        new WebpackCDNInject({
            head: ['https://maps.googleapis.com/maps/api/js?key=AIzaSyAMTNzJVRKjx083WotVZeuO8B5aRjyjZE4&callback=initMap']
        }),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

