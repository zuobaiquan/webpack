// 自带的库
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.join(__dirname, 'dist'), // 必须使用绝对地址，输出文件夹（打包后的文件存放的地方）
      //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
      filename: '[name].[chunkhash].js',// 打包后输出文件的文件名
      publicPath: './' // 知道如何寻找资源
    },
    module: {
        rules: [
            {
            // js 文件才使用 babel
                test: /\.js$/,
             // 使用哪个 loader
                use: 'babel-loader',
            // 不包括路径
                exclude: /node_modules/
            },
            {
            // 图片格式正则
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    // 配置 url-loader 的可选项
                    options: {
                    // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                      limit: 10000,
                    // 超出限制，创建的文件格式
                    // build/images/[图片名].[hash].[图片格式]
                      name: 'images/[name].[hash].[ext]'
                   }
                  }
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
                })
            },
        ]
    },
    // 插件列表
    plugins: [
    // 输出的文件路径
      new ExtractTextPlugin("css/[name].[hash].css"),

      // 我们这里将之前的 HTML 文件当做模板
      // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
}
