function outputMessage() {
console.log('Hellow world');
}
outputMessage();

/* const consoleMessage = function() {
  console.log('Hellow world');
};
consoleMessage();

const alertMessage = new Function('alert("Hi!")');
alertMessage(); */

const sum = function(a, b) {
  console.log(arguments);
  return a + b;
};
let res = sum(20, 20, 40, 30, 50, 9, 10, 8);
console.log(res);

(function() {
  console.log('Hello');
  }());

  const doNum = function(a, b, callback) {
    if (typeof a === 'number' && typeof b === 'number'){
      callback(a, b);
    }
  };
  doNum(5, 10, function(a, b){
    console.log(a + b);
  });

  function one(callback){
    console.log('Делаем запрос на сервер');
    setTimeout(function(){
      console.log('Получаем данные от сервера');
      callback();
    },1000);
  }
  function two(){
    console.log('выводим на страницу');
  }
  one(two);


  function changeTires(snowTires){
    /* демонтаж,  разбортовка, забортовка, давление,
    балансировка, монтаж*/
  }