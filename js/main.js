'use stricts';

let money = prompt('Ваш месячный доход?');
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split());

let deposit = Boolean(prompt('Есть ли у вас депозит в банке?'));
console.log(deposit);

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof money); 

let question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log('Какие обязательные ежемесячные расходы у вас есть?: ', question);

let question2 = prompt('Во сколько это обойдется?');
console.log('Во сколько это обойдется?: ', question2);

let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log('Какие обязательные ежемесячные расходы у вас есть?: ', question3);

let question4 = prompt('Во сколько это обойдется?');
console.log('Во сколько это обойдется?: ', question4);

let budgetMonth = money-question2-question4;
console.log('доход за месяц, учитывая обязательные расходы: ', budgetMonth);

let mission = 65000;
mission = parseFloat(Math.ceil(65000 / budgetMonth));
console.log('за сколько месяцев будет достигнута цель: ', mission);

let budgetDay = parseFloat(Math.floor(budgetMonth / 30));
console.log('бюджет в день: ', budgetDay);

if (budgetDay > 800) {
  console.log('Высокий доход');
} else if(budgetDay > 300 & budgetDay < 800){
  console.log('Средний уровень дохода');
} else if(budgetDay > 0 & budgetDay < 300){
  console.log('Низкий уровень дохода');
} else {
  console.log('Что то пошло не так');
} 

