const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config();

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

        new webpack.DefinePlugin({
            "process.env.WEATHER_API_KEY": JSON.stringify(process.env.WEATHER_API_KEY)
        })
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        open: true,
        port: 8080
    }
};