const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(5470,function(){
    console.log("文件放在中间服务器中，运行在端口5470中；访问即可")
})