
let input = [3,34,4,12,5,2]
let target = 9

// function findPairForSum (array, targetSum) {
//    let result = [];
//   let possibleNumbers = array.filter (element => element <= targetSum);
//   for (i = 0; i < possibleNumbers.length; i++){
//       let currentNumber = possibleNumbers[i];
//       let numberToSearchFor = targetSum - currentNumber;
      
//         for (j = i +1; j < possibleNumbers.length; j++){
//             if (possibleNumbers[j] === numberToSearchFor){
//             result = [currentNumber, possibleNumbers[j]];
//             break
//             }
//         }
//   } 
//   return result;
// }

function findPairForSum (array, target){
  let filteredList = array.filter(element => element <= target);
  //
   let result = recurseSum(filteredList, target);
      return result
}
//
function recurseSum(array, target){
    let result = [];
  //set the number to find as (target - the current array element)
  let currentArrayElement = array[0];
  let numToFind = target - currentArrayElement;
   if (numToFind === 0){
      return [currentArrayElement, 0];
  }
  //look in the array for the number to find
    //if the number to find is present
    if (array.indexOf(numToFind) !== -1){
        //return the current array element and the number to find as an array of 2 elements
        return [currentArrayElement, numToFind]
        //else increment the current array element by one and call recurse sum again
    } else {
       return recurseSum(array.slice(1), target);
    }

}
console.log(findPairForSum(input, target));