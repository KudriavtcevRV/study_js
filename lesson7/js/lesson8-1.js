'use stricts';
let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
      console.log('money: ', money);
    } while (isNaN(money) || money === '' || money === null);
  };

start();

let appData = {
  budget: +money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 65000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {

    if (confirm('есть ли у вас дополнительный заработок?')) {
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');

      } while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц зарабатываете на этом?', '10000');
      } while (isNaN(+cashIncome) || cashIncome === '' || cashIncome === null);
      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses;
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    } while (!isNaN(addExpenses) || addExpenses === '' || addExpenses === null);
    appData.addExpenses = addExpenses.split(', ');

    for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1).toLowerCase();
    }
    console.log(appData.addExpenses.join(' '));
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let expenses1 = "";
      let x = 0;
      do {
        expenses1 = prompt('Введите обязательную статью расходов', "");
      } while (!isNaN(expenses1) || expenses1 === '' || expenses1 === null);

      do {
        x = prompt('Во сколько это обойдется?', '');
      } while (isNaN(x) || x === '' || x === null);

      appData.expenses[expenses1] = x;
    }
  },
  getExpensesMonth: function getExpensesMonth() {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];

    }
    return sum;
  },

  getAccumulatedMonth: function getBudget() {
    appData.expensesMonth = appData.getExpensesMonth();
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
  },

  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' ||
      appData.percentDeposit === null);
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
      } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' ||
      appData.moneyDeposit === null);

    }
  },

  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

console.log(appData);
appData.asking();
appData.getAccumulatedMonth();
appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.getExpensesMonth());
appData.getStatusIncome();
appData.targetMonth();

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

let button = document.querySelector('#start'),
    income = document.querySelector('.income'),
    buttonExpensesAdd = income.querySelector('button'),
    expenses = document.querySelector('.expenses'),
    buttonIncomeAdd = expenses.querySelector('button'),
    checkbox = document.querySelector('#deposit-check'),
    additionalIncome = document.querySelectorAll('.additional_income-item'),
    value = document.querySelectorAll('[class $= -value]'),
    sum = document.querySelector('.salary-amount'),
    nameIncome = document.querySelector('.income-title'),
    sumIncome = document.querySelector('.income-amount'),
    nameExpenses = document.querySelector('.expenses-title'),
    sumExpenses = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses-item'),
    terget = document.querySelector('.target-amount'),
    deposirCheckbox = document.querySelector('.deposit-checkmark'),
    calculationPeriod = document.querySelector('input[type="range"]');


console.log(button);
console.log(buttonExpensesAdd);
console.log(buttonIncomeAdd);
console.log(checkbox);
console.log(additionalIncome);
console.log(value);
console.log(sum);
console.log(nameIncome);
console.log(sumIncome);
console.log(nameExpenses);
console.log(sumExpenses);
console.log(additionalExpenses);
console.log(terget);
console.log(deposirCheckbox);
console.log(calculationPeriod);

