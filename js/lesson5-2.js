let arr = ['23', '50', '284', '42', '96', '346', '4464'];

function array(){
  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === '2' || arr[i][0] === '4'){
      console.log(arr[i]);
    }
  }
}
let arr2 = array();