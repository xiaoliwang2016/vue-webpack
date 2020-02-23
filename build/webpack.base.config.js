var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack4.x 中推荐使用 mini-css-extract-plugin 代替 extract-text-webpack-plugin
var MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isDev = process.env.NODE_ENV === 'development'

module.exports = {

	resolve: {
		extensions: [".js", ".json", ".vue"],
		alias: 	{
			'@': path.resolve(__dirname, '../src')
		}
	},

    entry: path.resolve(__dirname, '../src/main.js'),

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[id].[hash].js"
    },

    module: {
        rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader" ]
			},
			{
				test: /\.less$/,
				use: [ isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader" ]
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [
					{
						loader: 'url-loader', 
						options: {
							limit: 10000,
							outputPath: 'img'
						}
					}
				]
			},
			{	
				test: /\.(ico|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'url-loader', 
						options: {
							limit: 10000,
							outputPath: 'font'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',	/** 使用 vg-sprite-loader 将指定 svg 文件打包成一张 sprite 图 */
				include: path.resolve(__dirname, '../src/icons'),
				options: {
					symbolId: 'icon-[name]'	/** 返回的ID，赋值给 Svg > use 标签中 href  */
				}
			},
        ]
	},
	
    plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		//抽离CSS
		new MiniCssExtractPlugin({ filename: "css/style.css" })
	]

}