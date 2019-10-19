let money = 35000;
let icome = 'Фриланс';
let addExpenses = '"Еда", "Комунальнуе услуги", "Спортзал"';
let deposit = true;
let mission = 65000;
let period = 2;

console.log(typeof money);
console.log(typeof icome);
console.log(typeof deposit);

console.log(icome.length);

console.log('За '  + period + ' месяца ' + '-' + ' Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));
let budgetDay = (money / 30);

console.log('Результат: ' + budgetDay + '\n' + '\n' + 'Остаток от деления: ' + (money % 30));

