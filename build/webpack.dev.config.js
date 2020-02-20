const webpack = require('webpack')
const path = require('path')
// 引入基础配置文件
const webpackBase = require("./webpack.base.config");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(webpackBase, {
	mode: 'development',
	
	devtool:"eval-source-map",

	module:{
		
	},

	plugins: [
		// 启用模块热替换(HMR)
		new webpack.HotModuleReplacementPlugin(),
		// 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
		new webpack.NamedModulesPlugin()
	],

	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		port: 9000
	}
})
