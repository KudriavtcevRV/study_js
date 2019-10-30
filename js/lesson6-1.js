'use stricts';
let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
      console.log('money: ', money);
    } while (isNaN(money) || money === '' || money === null);
  };

start();
// объект содержит все переменные которые мы создавали
let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 65000,
  period: 3,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    // console.log(addExpenses.split());
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for(let i = 0; i < 2; i++){
      let expenses1;
      let x;
      expenses1 = prompt('Введите обязательную статью расходов', "   ");
      do{
            x = prompt('Во сколько это обойдется?');
          } while (isNaN(x) || x === '' || x === null);
      
          appData.expenses[expenses1] = x;
    }
    
  }

};

appData.budget = money;
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
appData.getExpensesMonth = getExpensesMonth;
appData.getAccumulatedMonth = getAccumulatedMonth;
appData.getStatusIncome = getStatusIncome;
appData.getTargetMonth = getTargetMonth;

console.log(appData);
/* let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit); */



/* функция  getExpensesMonth. 
Функция возвращает сумму всех расходов за месяц */
function getExpensesMonth() {
  let expenses1,
      expenses2;
  let sum = 0;
  let x;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов', "Кварплата");
    }
    if (i === 1) {
      expenses2 = prompt('Введите обязательную статью расходов', "Бензин");
    }
    do {
      x = prompt('Во сколько это обойдется?');
    } while (isNaN(x) || x === '' || x === null);
    sum += +x;
  }
  return sum;
}
let expensesAmout = getExpensesMonth();
// let ExpensesMonth = getExpensesMonth(question2, question4);
console.log('Расходы за месяц: ' + expensesAmout);

/* for(let key in appData){
  console.log('Ключ: ' + key + 'Значение: ' + appData[key]);
}
 */
/* функция getAccumulatedMonth.
Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth */

function getAccumulatedMonth() {
  return money - expensesAmout;
}
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

let periodMonth = parseFloat(Math.ceil(appData.mission / accumulatedMonth));
console.log('periodMonth: ', periodMonth);

appData.budgetDay = parseFloat(Math.floor(accumulatedMonth / 30));
console.log('appData.budgetDay: ', appData.budgetDay);

function getStatusIncome() {
  if (appData.budgetDay > 800) {
    return ('Высокий доход');
  } else if (appData.budgetDay >= 300 & 
    appData.budgetDay <= 800) {
    return ('Средний уровень дохода');
  } else if (appData.budgetDay >= 0 &
    appData.budgetDay <= 300) {
    return ('Низкий уровень дохода');
  } else {
    return ('Что то пошло не так');
  }
}
console.log(getStatusIncome());
/* функция  getTargetMonth. 
Подсчитывает за какой период будет достигнута цель, 
зная результат месячного накопления и возвращает результат */
function getTargetMonth() {
  let y = parseFloat(Math.floor(appData.mission / accumulatedMonth));
  return y;
}
let TargetMonth = getTargetMonth();

if (TargetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Цуль достагнута за: ', TargetMonth);
}