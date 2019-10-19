"use strict";
let num = 266219;

console.log(num + '\n' + '\n' + num.toString().split('').join(' * ') + ' = ' + 
(eval(num.toString().split('').join(' * '))) + '\n' + '\n' +
(eval(num.toString().split('').join(' * '))) + '^2 ' + ' = ' + 
((eval(num.toString().split('').join(' * '))) ** 2) + '\n' + '\n' +
'Выводим первые два числа от результата: ' +
(eval(num.toString().split('').join(' * ')) ** 2).toString().substring(0, 2)  ); 
