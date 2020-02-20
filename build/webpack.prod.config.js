const webpack = require('webpack')
const path = require('path')
// 引入基础配置文件
const webpackBase = require("./webpack.config.base")
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge")
var { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = webpackMerge(webpackBase, {
    mode: 'production',

	module:{
		
    },
    
	plugins: [
        new CleanWebpackPlugin()
    ]

})