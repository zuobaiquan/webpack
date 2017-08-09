/**
 * Created by zuobaiquan01 on 2017/5/1.
 */

 //path是node自带的标准库
var path=require('path');
module.exports={
    //entry point就是文件打包的入口点，//入口文件会在运行时首先加载；
    entry:{
        admin:'./admin/index.js',
        client:'./client/index.js'
    },
    output:{
        //output.path 输出目录的绝对路径，//指定输出文件写入磁盘的路径
        path:path.join(__dirname,'dist'),
        //output.filename 每个包的相对路径,//指定输出文件写入磁盘文件的名字，filename仅仅是给文件命名；
        // [id] 被包的id所替代，
        // [name] 被包的名字替代（包的名字不存在的时候就用id顶替）
        filename:'[name].dundle.js',
        publicPath:'/dist/',
    }
};

//设置好后：在命令行执行：