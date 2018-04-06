const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, "./src/app.jsx")
    },

    output: {
        path: path.join(__dirname, "./dist")
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: "babel-loader"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ]
}