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
                text: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/ //屏蔽不需要处理的文件
            }
        ]
    }
};
// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。