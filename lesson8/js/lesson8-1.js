'use stricts';

let start = document.querySelector('#start'),
  cancel = document.querySelector('#cancel'),
  income = document.querySelector('.income'),
  buttonExpensesAdd = income.querySelector('button'),
  expenses = document.querySelector('.expenses'),
  buttonIncomeAdd = expenses.querySelector('button'),
  checkbox = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  value = document.querySelectorAll('[class $= -value]'),
  salaryAmount = document.querySelector('.salary-amount'),
  incomeItems = document.querySelectorAll('.income-items'),
  incomeTitle = document.querySelector('input.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  nameExpenses = document.querySelector('input.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  exepnsesItems = document.querySelectorAll('.expenses-items'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  deposirCheckbox = document.querySelector('.deposit-checkmark'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount');

// console.log(start);
// console.log(income);
// console.log(buttonIncomeAdd);
// console.log(buttonExpensesAdd);
// console.log(checkbox);
// console.log(additionalIncomeItem);
console.log(value);
// console.log(salaryAmount);
// console.log(incomeItems);
// console.log(exepnsesItems);
// console.log(incomeAmount);
// console.log(periodAmount);
// console.log(additionalExpensesItem);
// console.log(targetAmount);
// console.log(deposirCheckbox);
// console.log(expensesAmount);


let appData = {
  budget: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.calcPeriod();
    appData.getBudget();


    appData.showResult();
    
  },
  showResult: function(){
    value[0].value = appData.budgetMonth;
    value[1].value = parseFloat(Math.floor(appData.budgetDay));
    value[2].value = appData.expensesMonth;
    value[4].value = appData.addExpenses.join(', ');
    value[3].value = appData.addIncome.join(', ');
    value[6].value = Math.ceil(appData.getTargetMonth());
    value[5].value = appData.calcPeriod();
    periodSelect.addEventListener('input', function(){
      value[5].value = appData.calcPeriod();
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = exepnsesItems[0].cloneNode(true);
    exepnsesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonIncomeAdd);
    exepnsesItems = document.querySelectorAll('.expenses-items');
    if (exepnsesItems.length === 3) {
      buttonIncomeAdd.style.display = 'none';
    }
  },
  
  addIncomeBlock: function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonExpensesAdd);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      buttonExpensesAdd.style.display = 'none';
    }
  },
  submit: function(){
    if(+salaryAmount.value > 0 || salaryAmount.value !== ''){
      salaryAmount.setAttribute('disabled', true);
      nameExpenses.setAttribute('disabled', true);
      expensesAmount.setAttribute('disabled', true);
      for(let i = 0; i < incomeItems.length; i++){
        incomeTitle = incomeItems[i].querySelector('input.income-title');
        incomeAmount = incomeItems[i].querySelector('.income-amount');
        incomeTitle.setAttribute('disabled', true);
        incomeAmount.setAttribute('disabled', true);
      }
      for(let j = 0; j < exepnsesItems.length; j++){
        nameExpenses = exepnsesItems[j].querySelector('input.expenses-title');
        expensesAmount = exepnsesItems[j].querySelector('.expenses-amount');
        nameExpenses.setAttribute('disabled', true);
        expensesAmount.setAttribute('disabled', true);
      }
      additionalExpensesItem.setAttribute('disabled', true);
      targetAmount.setAttribute('disabled', true);
      additionalIncomeItem[0].setAttribute('disabled', true);
      additionalIncomeItem[1].setAttribute('disabled', true);
      cancel.style.display = 'block';
      start.style.display = 'none';
      appData.start();
    }
  },
  getExpenses: function(){
    exepnsesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let incomeTitle = item.querySelector('.income-title').value;
      let incomeAmout = item.querySelector('.income-amount').value;
        if(incomeTitle !== '' && incomeAmout !== ''){
          appData.income[incomeTitle] = incomeAmout;
        }
    });
    for(let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  asking: function () {
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
  },
  getExpensesMonth: function getExpensesMonth() {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    return sum;
  },

  getBudget: function getBudget() {
    appData.expensesMonth = appData.getExpensesMonth();
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
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

  getTargetMonth: function () {
    return targetAmount.value / appData.budgetMonth;
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

  calcPeriod: function () {
    periodSelect.addEventListener('input', function(){
      periodAmount.innerHTML = periodSelect.value;
    });
    return appData.budgetMonth * periodSelect.value;
  }
  
    
};


start.addEventListener('click', appData.submit);

buttonExpensesAdd.addEventListener('click', appData.addIncomeBlock);
buttonIncomeAdd.addEventListener('click', appData.addExpensesBlock);
console.log(appData);

// console.log('Расходы за месяц: ' + appData.getExpensesMonth());
// appData.getStatusIncome();
// appData.targetMonth();

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());