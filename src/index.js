import _ from 'lodash'
import './style.css'
//把lodash引入在这个文件中； 

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello')

    return element;
}

document.body.appendChild(component())