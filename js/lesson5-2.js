let arr = ['23', '50', '284', '42', '96', '346', '4464'];

function array(){
  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === '2' || arr[i][0] === '4'){
      console.log(arr[i].split(', '));
    }
  }
}
let arr2 = array();

function number(){
  for(let i = 0; i < 100; i++){
    console.log(i);
  }
}

let n = 100;

function primeNumbers(){
for(let i = 2; i <= n; i++){
  isPrime = true;
  for(let j = 2; j <= i; j++){
    if( (i % j) === 0 ){
      isPrime = false;
      break;
    }
    if(isPrime === true){
      console.log(i + ":" + "Простое число" + ",  " + "делиться на " + 1 + " и " + i );
      break;
    }
  }
}
  }
primeNumbers();