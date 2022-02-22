// function multiplyString (str){
   
//     return str
//         .split(', ')
//         .map(Number)
//         .reduce((pre, cur) => pre * cur);
  
// }

const multiplyString = (str) => str.split(', ').map(Number).reduce((pre, cur) => pre * cur);

console.log(multiplyString("-20, 2, 3, 4"))


// let strNum = "-20, 2, 3, 4"
// let splitted = strNum.split(', ');
// console.log(splitted)
