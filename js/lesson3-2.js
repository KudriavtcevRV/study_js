let lang = "en";

// Использование условного оператора
if(lang === "ru"){
  let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  console.log(arr);
} else if(lang === "en"){
  let arr2 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  console.log(arr2);
} 
// испотзование оператора switch-case
switch (lang){
  case "ru":
    let arr3 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    console.log(arr3);
    break;
  case "en":
    let arr4 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    console.log(arr4);
    break;
}

// Использование условный тернарный оператор
let array = [
  ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
];
let lang2 = (lang === "ru") ? array[0] : 
(lang === "en") ? array[1] : 'Выберите язык ru или en' ;
    
  console.log(lang2);

// Использование ассоциативные массивы

  let arr = {
    "ru" : ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    "en" : ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
  };
  console.log(arr[lang]);


let namePerson = "Артём";
  let Person =  (namePerson === "Артём") ? "Директор" : (namePerson === "Максим") ? "Преподаватель" : "Студент" ;
console.log( Person ); 