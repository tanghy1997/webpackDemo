module.exports = {
    devtool:'cheap-source-map',
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方  二笔的错误少了一个斜杠路径问题
        filename: "budle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
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
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用CSS modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    }
};
// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。