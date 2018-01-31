const webpack = require("webpack");
const path = require("path");

const uglifyOptions = {
    minimize: true,
    compress: true
};

module.exports = [
    {
        name: "server",
        entry: "./server.js",
        target: "node",

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "server.min.js"
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin(uglifyOptions)
        ],

        resolve: {
            modules: ['shared', 'node_modules']
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                }
            ]
        },
    }, {
        name: 'client',
        entry: './client.js',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'client.min.js',
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin(uglifyOptions)
        ],

        resolve: {
            modules: ['shared', 'node_modules']
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
];