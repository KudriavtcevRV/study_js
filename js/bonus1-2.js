

let leapYear = function(){

let yearStart = prompt('Введите начальный год:', '');
let yearLast = prompt('Введите начальный год:', '');
let change = yearStart;
let array = [];
if (yearStart > yearLast){
  yearStart = yearLast;
  yearLast = change;
}
  for (let i = yearStart; i <= yearLast; i++) {
    if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
      array.push(i);
    }
}
return array;
};
console.log(leapYear());