'use stricts';

let submitButton = document.querySelector('#start'),
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
  periodAmount = document.querySelector('.period-amount'),
  inputVal = document.querySelectorAll('input[type = "text"]');

// console.log(start);
// console.log(income);
// console.log(buttonIncomeAdd);
// console.log(buttonExpensesAdd);
// console.log(checkbox);
// console.log(additionalIncomeItem);
// console.log(value);
// console.log(salaryAmount);
// console.log(incomeItems);
// console.log(exepnsesItems);
// console.log(incomeAmount);
// console.log(periodAmount);
// console.log(additionalExpensesItem);
// console.log(targetAmount);
// console.log(deposirCheckbox);
// console.log(inputVal);

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

    this.budget = +salaryAmount.value;
    this.disabledImpuls();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    console.log('start: ', this);
  },
  showResult: function () {
    value[0].value = this.budgetMonth;
    value[1].value = parseFloat(Math.floor(this.budgetDay));
    value[2].value = this.expensesMonth;
    value[4].value = this.addExpenses.join(', ');
    value[3].value = this.addIncome.join(', ');
    value[6].value = Math.ceil(this.getTargetMonth());
    value[5].value = this.calcPeriod();
    console.log('showResult: ', this);
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = exepnsesItems[0].cloneNode(true);
    exepnsesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonIncomeAdd);
    exepnsesItems = document.querySelectorAll('.expenses-items');
    if (exepnsesItems.length === 3) {
      buttonIncomeAdd.style.display = 'none';
    }
  },

  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonExpensesAdd);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      buttonExpensesAdd.style.display = 'none';
    }
  },
  disabledImpuls: function () {
    if (+salaryAmount.value > 0 || salaryAmount.value !== '') {
      salaryAmount.setAttribute('disabled', true);
      nameExpenses.setAttribute('disabled', true);
      expensesAmount.setAttribute('disabled', true);
      for (let i = 0; i < incomeItems.length; i++) {
        incomeTitle = incomeItems[i].querySelector('input.income-title');
        incomeAmount = incomeItems[i].querySelector('.income-amount');
        incomeTitle.setAttribute('disabled', true);
        incomeAmount.setAttribute('disabled', true);
      }
      for (let j = 0; j < exepnsesItems.length; j++) {
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
      submitButton.style.display = 'none';
      // appData.start();

      console.log('submit: ', this);
    }
  },
  getExpenses: function () {
    exepnsesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let incomeTitle = item.querySelector('.income-title').value;
      let incomeAmout = item.querySelector('.income-amount').value;
      if (incomeTitle !== '' && incomeAmout !== '') {
        appData.income[incomeTitle] = incomeAmout;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth: function getExpensesMonth() {
    let sum = 0;
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    }
    return sum;
  },

  getBudget: function getBudget() {
    this.expensesMonth = this.getExpensesMonth();
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return targetAmount.value / this.budgetMonth;
  },
  calcPeriod: function () {
    return this.budgetMonth * periodSelect.value;
  }


};
let hardbind = appData.start.bind(appData);

submitButton.addEventListener('click', hardbind);

buttonExpensesAdd.addEventListener('click', appData.addIncomeBlock);
buttonIncomeAdd.addEventListener('click', appData.addExpensesBlock);
// console.log(appData);
periodSelect.addEventListener('input', lisenPeriod.bind(appData));

function lisenPeriod() {
  periodAmount.innerHTML = periodSelect.value;
  value[5].value = this.calcPeriod();
}

function reset() {
  let restart = document.querySelectorAll('input[type = "text"]');
  restart.forEach(function (item) {
    item.value = '';
    item.removeAttribute('disabled');
  });
  periodSelect.value = '1';
  periodAmount.innerHTML = periodSelect.value;
        incomeItems.forEach(function (item, index) {
    if (index > 0) {
      item.remove();
      buttonIncomeAdd.style.display = 'block';
    }
  });
  exepnsesItems.forEach(function (item, index) {
    if (index > 0) {
      item.remove();
      buttonExpensesAdd.style.display = 'block';
    }
  });
  appData.budget = 0;
  appData.income = {};
  appData.incomeMonth = 0;
  appData.addIncome = [];
  appData.expenses = {};
  appData.addExpenses = [];
  appData.deposit = false;
  appData.percentDeposit = 0;
  appData.moneyDeposit = 0;
  appData.period = 0;
  appData.budgetDay = 0;
  appData.budgetMonth = 0;
  appData.expensesMonth = 0;

  cancel.style.display = 'none';
  submitButton.style.display = 'block';

}
cancel.addEventListener('click', reset.bind(appData));