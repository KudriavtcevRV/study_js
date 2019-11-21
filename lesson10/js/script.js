'use strict';

const submitButton = document.querySelector('#start'),
  cancel = document.querySelector('#cancel'),
  income = document.querySelector('.income'),
  buttonExpensesAdd = income.querySelector('button'),
  expenses = document.querySelector('.expenses'),
  buttonIncomeAdd = expenses.querySelector('button'),
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  value = document.querySelectorAll('[class $= -value]'),
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('input.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  nameExpenses = document.querySelector('input.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  deposirCheckbox = document.querySelector('.deposit-checkmark'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  inputVal = document.querySelectorAll('input[type = "text"]'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');
let incomeItems = document.querySelectorAll('.income-items'),
  exepnsesItems = document.querySelectorAll('.expenses-items');

const AppData = function () {
  this.budget = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.perio = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function () {
  if (salaryAmount.value === '') {
    return;
  }
  this.budget = +salaryAmount.value;
  this.disabledImpuls();
  this.getExpInt();
  // this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getInfoDeposit();
  this.getBudget();
  this.showResult();
};
AppData.prototype.showResult = function () {
  value[0].value = this.budgetMonth;
  value[1].value = parseFloat(Math.floor(this.budgetDay));
  value[2].value = this.expensesMonth;
  value[4].value = this.addExpenses.join(', ');
  value[3].value = this.addIncome.join(', ');
  value[6].value = Math.ceil(this.getTargetMonth());
  value[5].value = this.calcPeriod();
  console.log('showResult: ', this);
};

AppData.prototype.ExpIntBlock = function (event) {
  console.log(event);
  const startStr = event.target.className.split(' ')[1].split('_')[0];
  let incExpItems = document.querySelectorAll(`.${startStr}-items`);
  const cloneIncExpItem = incExpItems[0].cloneNode(true);

  incExpItems[0].parentNode.insertBefore(cloneIncExpItem, event.target);
  incExpItems = document.querySelectorAll(`.${startStr}-items`);
  if (incExpItems.length === 3) {
    event.target.style.display = 'none';
  }
  incomeItems = document.querySelectorAll('.income-items');
  exepnsesItems = document.querySelectorAll('.expenses-items');
};

AppData.prototype.disabledImpuls = function () {
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
  }
};
/* AppData.prototype.getExpenses = function () {
  exepnsesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      appData.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function () {
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
}; */
AppData.prototype.getInfoDeposit = function () {
  if (this.deposite) {
    this.percentDeposite = depositPercent.value;
    this.moneyDeposite = depositAmount.value;
  }
};





AppData.prototype.getAddExpenses = function () {
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const _this = this;
  additionalIncomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue);
    }
  });
};

AppData.prototype.getAddIncExp = function () {

};





AppData.prototype.getExpensesMonth = function getExpensesMonth() {
  let sum = 0;
  for (let key in this.expenses) {
    sum += +this.expenses[key];
  }
  return sum;
};
AppData.prototype.getBudget = function getBudget() {
  this.expensesMonth = this.getExpensesMonth();
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
  this.budgetDay = this.budgetMonth / 30;
};
AppData.prototype.getTargetMonth = function () {
  return targetAmount.value / this.budgetMonth;
};
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};


AppData.prototype.lisenPeriod = function () {
  periodAmount.innerHTML = periodSelect.value;
  value[5].value = appData.calcPeriod();
};
AppData.prototype.reset = function () {
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

};
AppData.prototype.eventsListeners = function () {
  let hardbind = appData.start.bind(appData);
  submitButton.addEventListener('click', hardbind);
  buttonExpensesAdd.addEventListener('click', AppData.prototype.ExpIntBlock);
  buttonIncomeAdd.addEventListener('click', AppData.prototype.ExpIntBlock);
  periodSelect.addEventListener('input', appData.lisenPeriod.bind(appData));
  cancel.addEventListener('click', appData.reset.bind(appData));
};
AppData.prototype.getExpInt = function () {
  const count = item => {
    const startStr = item.className.split('-')[0];
    console.log(startStr);
    const itemTitle = item.querySelector(`.${startStr}-title`).value;
    const itemAmount = item.querySelector(`.${startStr}-amount`).value;
    if (itemTitle !== '' && itemAmount !== '') {
      this[startStr][itemTitle] = itemAmount;
    }
  };
  exepnsesItems.forEach(count);
  incomeItems.forEach(count);

  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }

};
const appData = new AppData();
console.log(appData);
AppData.prototype.eventsListeners();

depositCheck.addEventListener('change', function () {
  if (depositCheck.checked) {
    depositBank.style.display = 'inline-block';
    depositAmount.style.display = 'inline-block';
    appData.deposit = 'true';
    depositBank.addEventListener('change', function () {
      let selectIndex = this.options[this.selectedIndex].value;
      if (selectIndex === 'other') {
        depositPercent.style.display = 'inline-block';
        depositPercent.value = '';
      } else {
        depositPercent.style.display = 'none';
        depositPercent.value = selectIndex;
      }

    });
  } else {
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositAmount.value = '';
    appData.deposit = 'false';
  }
});