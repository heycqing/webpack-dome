import _ from 'lodash'

//把lodash引入在这个文件中； 

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'],' ');

    return element;
}

document.body.appendChild(component())