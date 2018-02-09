// 引入math.js文件中的cube函数，但是并未引入square函数，
// 在这里，有一个问题，就是打包后,bundle.js里也会包含未引用的
// square函数，
import  {cube} from './math.js'

function component(){
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to '+ cube(5)
    ].join('\n\n')
    
    return element;
}

document.body.appendChild(component())