var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
			// 它会应用到普通的 `.js` 文件
			// 以及 `.vue` 文件中的 `<script>` 块
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			// 它会应用到普通的 `.css` 文件
			// 以及 `.vue` 文件中的 `<style>` 块
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
				        options: {
				            name: '[path][name].[ext]',//path为相对于context的路径
				            context:'src',
				            publicPath:function(url){//返回最终的资源相对路径
				                return path.relative('dist',url).replace(/\\/g,'/');
				            }
				        }
					}
				]
			},
			{	
				test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'url-loader', // 根据图片大小，把图片优化成base64
						options: {
						  limit: 10000
						}
					}
				]
			}
        ]
	},
	
    plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' })
	]

}