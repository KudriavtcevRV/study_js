let wrapBook = document.querySelector('.books'),
  div = document.querySelectorAll('div'),
  book = document.querySelectorAll('.book'),
  list = document.querySelectorAll('ul'),
  elem2 = list[0].querySelectorAll('li'),
  elem5 = list[5].querySelectorAll('li'),
  elem6 = list[2].querySelectorAll('li'),
  body = document.querySelector('body'),
  newElea = document.querySelector('newElem'),
  title = document.querySelectorAll('h2'),
  adv = document.querySelector('.adv');

console.log(list);
console.log(book);
console.log(elem2);
console.log(elem6);
console.log(div);
wrapBook.insertBefore(book[1], book[0]);
wrapBook.insertBefore(book[4], book[2]);
wrapBook.insertBefore(book[3], book[2]);
wrapBook.insertBefore(book[5], book[2]);

body.setAttribute('style', 'background-image: url(../image/you-dont-know-js.jpg)');

title[4].textContent = 'Книга 3. this и Прототипы Объектов';
title[4].setAttribute('style', 'color: darkkhaki');

adv.parentNode.removeChild(adv);
// div[6].classList.remove('adv');

list[0].appendChild(elem2[0]);
list[0].appendChild(elem2[1]);
list[0].appendChild(elem2[3]);
list[0].appendChild(elem2[6]);
list[0].appendChild(elem2[8]);
list[0].appendChild(elem2[4]);
list[0].appendChild(elem2[5]);
list[0].appendChild(elem2[7]);
list[0].appendChild(elem2[9]);
list[0].appendChild(elem2[2]);
list[0].appendChild(elem2[10]);



list[5].appendChild(elem5[0]);
list[5].appendChild(elem5[1]);
list[5].appendChild(elem5[9]);
list[5].appendChild(elem5[3]);
list[5].appendChild(elem5[4]);
list[5].appendChild(elem5[2]);
list[5].appendChild(elem5[6]);
list[5].appendChild(elem5[7]);
list[5].appendChild(elem5[5]);
list[5].appendChild(elem5[8]);
list[5].appendChild(elem5[10]);


let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
list[2].appendChild(newElem);

list[2].appendChild(elem6[9]);