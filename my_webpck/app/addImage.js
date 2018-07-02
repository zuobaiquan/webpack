
let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/img1.jpg')
document.body.appendChild(smallImg)

let bigImg = document.createElement('img')
bigImg.src = require('../images/img2.jpg')
document.body.appendChild(bigImg)
