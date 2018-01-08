const path = require("path");

module.exports = [
{
        name: "server",
        entry: "./server.js",
        target: "node",

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "server.js"
        },

        resolve: {
            modules: ["node_modules"]
        },

        module: {
            rules: [
                {
                    test: /\.mjs?$/,
                    loader: "babel-loader",
                }
            ]
        },
    }
];