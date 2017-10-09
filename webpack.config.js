'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry : [
		'webpack-hot-middleware/client',
		'./src/index.js'
	],
	output: {
		filename  : 'main.js',
		path      : path.resolve(__dirname, 'public'),
 	},

	module : {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use : {
					loader : 'babel-loader',
					options:
						{
							"presets": ["es2015", "stage-0", "react"],
							"plugins": ["transform-decorators-legacy"]
						}
				}
			},
			{
				test: /\.(css|scss)$/,
				use : ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use     : ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use : [
					'file-loader'
				]
			}
		]
	},
	resolve: {
		modules   : ["node_modules"],
		extensions: ['.js', '.jsx', '.css']
	},
	devtool: 'eval-source-map',
	plugins: [
		new ExtractTextPlugin({
			filename: 'public/style.css'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.tpl.html',
			filename: 'index.html',
			inject  : 'body'
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};