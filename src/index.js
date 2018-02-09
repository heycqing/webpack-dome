//把lodash引入在这个文件中； 
import _ from 'lodash'
// 引入print.js
 import  print from './print.js'
// 引入css文件
import './style.css'

function component(){
    var element = document.createElement('div');

    var btn = document.createElement('button')

    element.innerHTML = _.join(['Hello','webpack'],' ');

    btn.innerHTML = 'click me in that!';
    btn.onclick = print;

    element.appendChild(btn)
    
    return element;
}

document.body.appendChild(component())