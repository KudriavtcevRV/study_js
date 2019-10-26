'use stricts';

let mission = 65000;
let money;

let start = function(){
  // money = prompt('Ваш месячный доход?');

  do {
    money = prompt('Ваш месячный доход?');
    console.log('money: ', money);
  } while (isNaN(money) || money === '' || money === null);

};
start();

/* let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// console.log(addExpenses.split());
let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money); */
// console.log(typeof money);
// console.log(typeof addExpenses);
// console.log(typeof money); 
let expenses1,
    expenses2;

/* функция  getExpensesMonth. 
Функция возвращает сумму всех расходов за месяц */
function  getExpensesMonth(){
  let sum = 0;
  let x;
  for(let i = 0; i < 2; i++){
    if(i === 0){
      expenses1 = prompt('Введите обязательную статью расходов', "Кварплата");
    }
    if(i === 1){
      expenses2 = prompt('Введите обязательную статью расходов', "Бензин");
    }
    do {
      x = prompt('Во сколько это обойдется?');
    } while(isNaN(x) || x === '' || x === null);
    sum += +x;
  }
  return sum;
}
let expensesAmout = getExpensesMonth();
// let ExpensesMonth = getExpensesMonth(question2, question4);
console.log('Расходы за месяц: ' + expensesAmout);


/* функция getAccumulatedMonth.
Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth */

function getAccumulatedMonth(){
  return money - expensesAmout;
}
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

let periodMonth = parseFloat(Math.ceil(mission / accumulatedMonth));
let budgetDay = parseFloat(Math.floor(accumulatedMonth / 30));

let getStatusIncome = function() {
  if (budgetDay > 800) {
    return ('Высокий доход');
  } else if(budgetDay >= 300 & budgetDay <= 800){
    return ('Средний уровень дохода');
  } else if(budgetDay >= 0 & budgetDay <= 300){
    return ('Низкий уровень дохода');
  } else {
    return ('Что то пошло не так');
  } 
};
console.log(getStatusIncome());






/* функция  getTargetMonth. 
Подсчитывает за какой период будет достигнута цель, 
зная результат месячного накопления и возвращает результат */
function getTargetMonth() {
  let y = parseFloat(Math.floor(mission / accumulatedMonth));
  return y ;
}
let TargetMonth = getTargetMonth();

if(TargetMonth < 0 ){
  console.log('Цель не будет достигнута');
} else {
  console.log('Цуль достагнута за: ', TargetMonth);
}






