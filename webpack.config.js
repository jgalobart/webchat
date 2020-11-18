const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src','index.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
       },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
	            test: /\.(png|svg|jpg|jpeg|gif)$/i,
	            type: 'asset/resource',
		    }	
        ],
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    }),
    new CleanWebpackPlugin(),
    ]
};
