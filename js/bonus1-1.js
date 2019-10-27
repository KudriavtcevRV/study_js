function comparesNumber() {
  let question1,
  question2;
  let x1;
  let x2;
  
  do {
  question1 = prompt('Введите первое число');
  x1 = +question1;
  }
  while (isNaN(question1) || question1 === '' || question1 === null);
  
  do {
  question2 = prompt('Введите второе число');
  x2 = +question2;
  }
  while (isNaN(question2) || question2 === '' || question2 === null);

  if (x1  < x2) {
    console.log(question1 + " < " + question2);
  } else if (x1 > x2) {
    console.log(question1 + " > " + question2);
  } else{
    console.log(question1 + " = " + question2);
  }
  return;
}
comparesNumber();