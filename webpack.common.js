const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports ={
    entry : {
        app:'./src/index.js',
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ],
    output : {
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    }
}