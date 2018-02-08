import _ from 'lodash'
//把lodash引入在这个文件中； 

import './style.css'
// 引入css文件

 import jpg from './siqing.jpg'
//  引入图片

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello')

    var myPic = new Image();
    myPic.src = jpg;

    element.appendChild(myPic)

    return element;
}

document.body.appendChild(component())