let arr = [1,2, 3];

// function stringFinder(arr) {
//     let hasString = false;
//     for (i = 0; i < arr.length; i ++){
//         if (typeof arr[i] === 'string'){
//             hasString = true;
//             return hasString;
//         }
//     }
// }

// function checkSomeStrings(arr){
    
   

// }
function stringFinder(prev, curr) {
    return prev === true ? true : typeof curr === "string"
  }
  
  let arr = [1,2,3,4,5]
  let stringArr = [1,2,"3",4,5]
  
  console.log("Should not contain string:", arr.reduce(stringFinder, false))
  console.log("Should contain string:", stringArr.reduce(stringFinder, false))


//console.log(checkSomeStrings(arr));