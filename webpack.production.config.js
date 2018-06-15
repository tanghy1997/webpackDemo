const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//已经被webpack4移除请使用mini-css-extract-plugin
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//可以不需要production环境下自动压缩
module.exports = {
    devtool:'none',
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方  二笔的错误少了一个斜杠路径问题
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        hot: true
    },

    // 配置Babel
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // 为了方便会把babel配置项分出去成一个.babelrc文件
                    // options: {
                    //     presets: [
                    //         "env", "react", ["es2015", {"loose": true}],
                    //     ]
                    // }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用CSS modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({ /* your config */ })
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" ////new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载组件
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),//webpack4中被移除使用optimization.minimize替代或者production环境下自动压缩
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "style.css",
        //     // chunkFilename: "[id].css"
        // })
    ],
};
// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。