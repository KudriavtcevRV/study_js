function getRandomNumber(max){
  let toAsk;
  let randomNumber = Math.floor(Math.random() * Math.floor(max));
  console.log(randomNumber);
  do{
    toAsk = prompt('Угадай число');

    if(isNaN(toAsk)){
      alert('Введите число!');
    }
    if(+toAsk < randomNumber) {
      alert('Меньше!');
      confirm('Хотите попробывать ещё?');
    } 
    else if(+toAsk > randomNumber) {
      alert('Больше!');
      confirm('Хотите попробывать ещё?');
    } 
    else if(+toAsk === randomNumber) {
      alert('Поздравляю вы угадали!!!');
      confirm('Хотите сыграть еще?');
    } 
  }while(toAsk !== null);
  
  return;
}
getRandomNumber(100);