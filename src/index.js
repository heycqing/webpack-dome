//把lodash引入在这个文件中； 
import _ from 'lodash'
// 引入css文件
import './style.css'
// 引入图片
import jpg from './siqing.jpg'
// 引入数据，json数据在node中是默认识别，不需要加载 loader加载器 
import jsonData from './test.json'

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello')

    var myPic = new Image();
    myPic.src = jpg;

    element.appendChild(myPic)

    console.log(jsonData)
    
    return element;
}

document.body.appendChild(component())