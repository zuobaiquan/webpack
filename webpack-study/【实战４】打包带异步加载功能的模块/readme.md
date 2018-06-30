<h3>前注：</h3>

文档全文请查看 [根目录的文档说明](https://github.com/qq20004604/webpack-study)。

如果可以，请给本项目加【Star】和【Fork】持续关注。

有疑义请[点击这里](https://github.com/qq20004604/webpack-study/issues)，发【Issues】。

[实战项目示例目录](https://github.com/qq20004604/webpack-study/tree/master/%E3%80%90%E5%AE%9E%E6%88%98%EF%BC%94%E3%80%91%E6%89%93%E5%8C%85%E5%B8%A6%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E5%8A%9F%E8%83%BD%E7%9A%84%E6%A8%A1%E5%9D%97)

<h3>0、使用说明</h3>

安装：

```
npm install
```

运行：

```
npm run test
```

<h3>1、需求列表</h3>

1、有模块A、B两个；

2、A组件默认加载，B组件在符合某种条件下加载（例如延迟1秒后再加载）；

3、显然我需要打包其为2个文件；

<h3>2、步骤</h3>

安装依赖

```
npm install
```

执行打包命令：

```
npm run test
```

查看打包后效果：

```
dist/index.html
```

<h3>3、说明</h3>

首先，第一个简单问题可能会被忽略，那就是打包时需要顺便打包index.html文件，因为B模块打包后的文件的路径``dist/b.js``，是写的相对于A模块的``dist/a.js``，同时会认为html文件和``a.js``、``b.js``两个文件在同一个目录下（除非你特殊设置）

所以html文件必须和打包后的文件处于一个文件夹下，即``dist``文件夹。

其他代码和普通的没什么不同，这里最核心的问题，在于如何让模块B可以打包到另外一个文件，并延迟加载。

核心代码如下：

```
setTimeout(() => {
	require(['./bar.js'], function (module) {
	    module.test()
	})
}, 1000)
```

1、``setTimeout``没啥可说的，就是让加载模块的代码，延迟执行。但注意，这个不会触发异步，只是模拟实际操作中的延迟操作行为；

2、``setTimeout``里面的代码，是异步加载的核心，无非就是require引入了一个模块，然后参数二是回调函数，回调函数的第一个参数是引入模块导出的值；

3、``export {test}``导出模块支持es6写法，或者CommonJS写法、AMD写法、CMD写法（具体参照【实战4】里面的 ``bar.js`` 文件）；

4、注意，这个行为是异步的，所以才放在回调函数里，如果你在``require``之后想执行一段在执行完回调函数才执行的代码，一定要注意这一点，不能直接写在``require``函数之后；

5、我们常见框架中异步加载组件的写法，是``let test = resolve => require(['./bar.js'], resolve)``，相当于对以上代码进行 <b>柯里化</b> 了。剩下的任务，框架帮我们完成了。

