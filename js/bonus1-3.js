let number = function(){
  let sum = 0;
  let enter;
do{
  enter = prompt('Введите числа'); 
  // Проверяем на ввод числа
  if(!isNaN(enter)){
    sum += +enter;
  }
} while(enter !== null);  // выход при нажатии на отмена
  return sum;
} ;
console.log(number());