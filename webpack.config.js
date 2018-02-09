const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 引入热加载模块
const webpack = require('webpack')
// 引入去除不需要的代码插件，做到精简输出
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry : {
        app:'./src/index.js',
    },
    devtool:'inline-source-map',
    devServer:{
       contentBase: './dist',
       hot:true
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // 精简输出的插件
        new UglifyJSPlugin()
    ],
    output : {
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path : path.resolve(__dirname,'dist'),
        publicPath:'/'
    }
}