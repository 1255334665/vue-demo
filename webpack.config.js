const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV == 'development';

var config = {
    //target:"web", //指示webpack定位特定环境
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },{
                test: /\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },{
                test:/\.(jpg|png|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit:1024,
                            name:'[name]-jxq.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({   //在跑npm的时候标识不同环境
           'process.env':{
               NODE_ENV:isDev ? "'development'" : "'production'"
           }
        }),
        new HtmlWebpackPlugin({
            filename:'[name]-[hash].html',
            template:'./index.html', //会与根目录下的index.html相关联，把根目录下index的东西都放到生成的HTML中
            inject:true  //js文件放置的位置或不放js文件  有四个参数
        }),
        new VueLoaderPlugin()
    ]
};

if(isDev){
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port:8080,
        host:'localhost',
        open:true,
        hot:true,
        proxy:{}//代理
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//启动webpack-dev-server hot的plugin
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;