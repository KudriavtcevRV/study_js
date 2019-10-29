'use strict';

let car = {
  model: 'mazda',
  yaer: 2006,
  turbochanging: true,
  specifications: [],
  style: {
    clor: 'blue'
  }
};
console.log(car.model);
console.log(car['model']);

car['best palace'] = 'city';
console.log(car);
car.ride = function(speed){
  console.log('машина едет со скоростью ' +
  speed + ' км/ч');
};
car.ride(60);

car.stop = stop;
car.stop();
stop();
console.log(car);

// функция которая не привязана к переменной
function stop(){
  console.log('машина стоит, скорость 0 км/ч');
}


let titleTrans = 'Коробка передач';
let bodyTrans = 'Автоматическая коробка передач';

car[titleTrans] = 'bodyTrans';
console.log(car);
/* let obj = new Object();


console.log(car);
console.log(car.model);

car.color = 'black';
console.log(obj);

car.style = obj;
console.log(car);
console.log(car.style === obj);

obj.color = 'red';
console.log(obj); */


