/*Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

// function findMidpoint (array) {
//   return Math.floor(array.length / 2);
// }

// const binarySearch = (arr)

const findMidpoint = (array) => Math.floor(array.length / 2);

// function getTargetRange (array, midPoint, target) {
//   if (array[midPoint] > target) {
//     return array.slice(0, midPoint);
//   } else {
//     return array.slice(midPoint + 1, array[array.length-1])
//   } 
// }

const getTargetRange = (array, midPoint, target) => 
  (array[midPoint] > target) ? array.slice(0, midPoint) : array.slice(midPoint + 1, array[array.length -1]);

function findValue (input, target) {

  //find the midpoint of the array
  let arrayMidPoint = findMidpoint(input);//1stPass: index[3] === 22; 2nd pass: index[1] === 33
  //find the target range based upon the midpoint value
  let targetRange = getTargetRange(input, arrayMidPoint, target); //1stPass: [31, 33, 34]; 2nd pass: [31]

  let match = input[arrayMidPoint];
 
  if (match === target) {
    return `index of ${target} is: ${input.indexOf(match)}`;
  } else if (match.length === 1) {
    return null
  } else {
    return findValue(targetRange, target);
  }

}

let inputArray = [1,3, 16, 22, 31, 33, 34];
let target = 22;
console.log(findValue(inputArray, target))
// console.log(findMidpoint(inputArray))



// find the midpoint
// if the midpoint is the target return that
// else get the half of the array that the target is in (cuz its sorted)
// rerun previous lines with new half as input