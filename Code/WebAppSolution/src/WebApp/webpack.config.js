var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.module.ts',
    output: {
        path: './wwwroot',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },
    resolve:['', '.js', '.ts'],
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};