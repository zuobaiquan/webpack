## webpack打包工具

初始化npm
    npm init --yes
安装webpack开发所需的包，在项目根目录下本地安装
    npm i webpack-dev-server   ( i 这里是简写 install )

webpack的写法全部都在 " webpack.config.js " 文件中（项目根目录）
新建默认读取的文件 webpack.config.js

loader:
Webpack本身是只能处理JavaScript的，要是需要在应用里加CSS文件，那么我们就需要css-loader来处理CSS文件，另外还需要style-loader来把样式加到CSS文件里面。

css-loader 处理css中路径引用等问题
style-loader 动态把样式写入css
sass-loader scss编译器
less-loader less编译器
postcss-loader scss再处理

在index.html
dist/admin.dunble.js、dist/client.dunble.js
 命令行执行 webpack-dev-server
 会报错：bash: webpack-dev-server: command not found
这时一般的做法通过写script方式来从local环境读取server,
在package.json中配置 "start":"webpack-dev-serve --progress --colors"

