const path = require('path');

module.exports = {
    entry : {
        app:'./src/index.js',
        print : './src/print.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'OUtput Management'
        })
    ],
    output : {
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    }
}