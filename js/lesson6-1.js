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
  budget: +money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 65000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    // console.log(addExpenses.split());
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for(let i = 0; i < 2; i++){
      let expenses1 = "";
      let x = 0;
      expenses1 = prompt('Введите обязательную статью расходов', "");
      do{
            x = prompt('Во сколько это обойдется?', '');
          } while (isNaN(x) || x === '' || x === null);
      
          appData.expenses[expenses1] = x;
    }
  },
  getExpensesMonth: function getExpensesMonth() {
    let sum = 0;
    for(let key in appData.expenses){
        sum += +appData.expenses[key];
        
      }
    return sum; 
  },
  // let ExpensesMonth = getExpensesMonth(question2, question4);
  
  getAccumulatedMonth: function getBudget() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = parseFloat(Math.floor(appData.budgetMonth / 30));
  },
  getStatusIncome: function getStatusIncome() {
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
    console.log('Уровень дохода ' + appData.getStatusIncome());
  },
  targetMonth: function getTargetMonth() {
    let y = parseFloat(Math.floor(appData.mission / appData.budgetMonth));
    if (y < 0) {
      console.log('Цель не будет достигнута');
    } else {
      console.log('За какой период будет достигнута цель (в месяцах): ', y);
    }
    
  }
};

console.log(appData);
appData.asking();
appData.getAccumulatedMonth();
console.log('Расходы за месяц: ' + appData.getExpensesMonth());
appData.expensesMonth = appData.getExpensesMonth();
appData.getStatusIncome();
appData.targetMonth();

console.log("\n" + "Наша программа включает в себя данные: ");
for (let key in appData){
  console.log(key + '  ' + appData[key]);
}


/* appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0; */
// appData.getExpensesMonth = getExpensesMonth;
// appData.getAccumulatedMonth = getBudget;
// appData.getStatusIncome = getStatusIncome;
// appData.getTargetMonth = getTargetMonth;
/* let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit); */

/* функция  getExpensesMonth. 
Функция возвращает сумму всех расходов за месяц */


/* for(let key in appData){
  console.log('Ключ: ' + key + 'Значение: ' + appData[key]);
}
 */
/* функция getAccumulatedMonth.
Функция возвращает Накопления за месяц (Доходы минус расходы)
Результат сохранить в переменную accumulatedMonth */


/* 
let periodMonth = parseFloat(Math.ceil(appData.mission /appData.budgetMonth));
console.log(' За какой период будет достигнута цель (в месяцах): ', periodMonth);
 */

//  функция  getTargetMonth. 
// Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления и возвращает результат 
