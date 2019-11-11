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
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getAddIncome();
    // appData.calcPeriod();
    this.getBudget();


    this.showResult();
    this.reset();
    console.log('start: ', this);
  },
  showResult: function(){
    value[0].value = this.budgetMonth;
    value[1].value = parseFloat(Math.floor(this.budgetDay));
    value[2].value = this.expensesMonth;
    value[4].value = this.addExpenses.join(', ');
    value[3].value = this.addIncome.join(', ');
    value[6].value = Math.ceil(this.getTargetMonth());
    value[5].value = appData.calcPeriod();
    periodSelect.addEventListener('input', function(){
      value[5].value = appData.calcPeriod();
    });

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
      submitButton.style.display = 'none';
      appData.start();
      console.log('submit: ', this);
    }
  },
  reset: function(){
    cancel.addEventListener('click', function(){
      let reset = document.querySelectorAll('input[type = "text"]');
      let resetSlider = document.querySelector('input[type = "range"]');
      reset.forEach(function(item){
        item.value = '';
        item.removeAttribute('disabled');
        });
        resetSlider.value = '1';
        periodAmount.innerHTML = resetSlider.value;
        appData.calcPeriod = 0;
        if (exepnsesItems.length > 1) {
          // cloneIncomeItem.style.display = 'none';
          for(let i = 1; i < exepnsesItems.length; i++ ){
            exepnsesItems[i].style.display = 'none';
            buttonExpensesAdd.style.display = 'block';
          }
        }
        if(incomeItems.length > 1){
          for(let i = 1; i < incomeItems.length; i++ ){
            incomeItems[i].style.display = 'none';
            buttonIncomeAdd.style.display = 'block';
          }
        }
        cancel.style.display = 'none';
        submitButton.style.display = 'block';
    });
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
    for(let key in this.income){
      this.incomeMonth += +this.income[key];
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
    this.addExpenses = addExpenses.split(', ');

    for (let i = 0; i < appData.addExpenses.length; i++) {
      this.addExpenses[i] = this.addExpenses[i][0].toUpperCase() + this.addExpenses[i].slice(1).toLowerCase();
    }
    console.log(appData.addExpenses.join(' '));
    this.deposit = confirm('Есть ли у вас депозит в банке?');
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
  getStatusIncome: function getStatusIncome() {
    if (this.budgetDay > 800) {
      return ('Высокий доход');
    } else if (this.budgetDay >= 300 &
      this.budgetDay <= 800) {
      return ('Средний уровень дохода');
    } else if (this.budgetDay >= 0 &
      this.budgetDay <= 300) {
      return ('Низкий уровень дохода');
    } else {
      return ('Что то пошло не так');
    }
  },

  getTargetMonth: function () {
    return targetAmount.value / this.budgetMonth;
  },

  getInfoDeposit: function () {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (isNaN(this.percentDeposit) || this.percentDeposit === '' ||
        this.percentDeposit === null);
      do {
        this.moneyDeposit = prompt('Какая сумма заложена?', '10000');
      } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' ||
        this.moneyDeposit === null);

    }
  },

  calcPeriod: function () {
    periodSelect.addEventListener('input', function(){
      periodAmount.innerHTML = periodSelect.value;
    });
    return this.budgetMonth * periodSelect.value;
  }
  

};
periodSelect.addEventListener('input', function(){
  periodAmount.innerHTML = periodSelect.value;
});

let hardbind = appData.submit.bind(appData);

submitButton.addEventListener('click', hardbind);

buttonExpensesAdd.addEventListener('click', appData.addIncomeBlock);
buttonIncomeAdd.addEventListener('click', appData.addExpensesBlock);
// console.log(appData);

  

// console.log('Расходы за месяц: ' + appData.getExpensesMonth());
// appData.getStatusIncome();
// appData.targetMonth();

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());