'use stricts';

let mission = 65000;
let money = +prompt('Ваш месячный доход?');
// console.log(money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// console.log(addExpenses.split());
let deposit = Boolean(prompt('Есть ли у вас депозит в банке?'));
// console.log(deposit);
let showTypeOf = function(data) {
  console.log(data, typeof(data));
};
showTypeOf(money);
// console.log(typeof money);
// console.log(typeof addExpenses);
// console.log(typeof money); 
let question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
// console.log('Какие обязательные ежемесячные расходы у вас есть?: ', question);
let question2 = +prompt('Во сколько это обойдется?');
// console.log('Во сколько это обойдется?: ', question2);
let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
// console.log('Какие обязательные ежемесячные расходы у вас есть?: ', question3);
let question4 = +prompt('Во сколько это обойдется?');
// console.log('Во сколько это обойдется?: ', question4);
let budgetMonth = money-question2-question4;
// console.log('доход за месяц, учитывая обязательные расходы: ', budgetMonth);
let periodMonth = parseFloat(Math.ceil(mission / budgetMonth));
// console.log('за сколько месяцев будет достигнута цель: ', periodMonth);
let budgetDay = parseFloat(Math.floor(budgetMonth / 30));
// console.log('бюджет в день: ', budgetDay);

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

/* функция  getExpensesMonth. 
Функция возвращает сумму всех расходов за месяц */
function  getExpensesMonth(a, b){
  return a + b;
}
let ExpensesMonth = getExpensesMonth(question2, question4);
console.log(ExpensesMonth);

/* функция getAccumulatedMonth.
Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth */

function getAccumulatedMonth(money){
  return money - ExpensesMonth;
}
let accumulatedMonth = getAccumulatedMonth(money);
console.log(accumulatedMonth);

/* функция  getTargetMonth. 
Подсчитывает за какой период будет достигнута цель, 
зная результат месячного накопления и возвращает результат */
function getTargetMonth(mission) {
  return parseFloat(Math.floor(mission / accumulatedMonth));
}
let TargetMonth = getTargetMonth(mission);
console.log(TargetMonth);




