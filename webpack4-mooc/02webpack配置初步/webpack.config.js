// http://nodejs.cn/api/path.html#path_path
const path=require('path')

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    // path.resolve 绝对路径
    // __dirname 绝对路径
    path:path.resolve(__dirname,'bundle')
  }
}
