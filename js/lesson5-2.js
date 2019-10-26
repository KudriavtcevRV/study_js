let arr = ['23', '50', '284', '42', '96', '346', '4464'];
let arr2 = [];
function array() {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(array());




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