function func(x){
  if (typeof x !== 'string') {
    alert('Вы ввели не строку');
  } else {
    console.log(x.trim().substr(0, 30) + '...');
  }
}
func('          Если строка более 30 знаков - то после 30го символа ');