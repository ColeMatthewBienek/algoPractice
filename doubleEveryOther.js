// // Write a function that doubles every second integer in a list, starting from the left.
// // Example:
// // For input array/list :
// // [1,2,3,4]
// // the function should return :
// // [1,2,3,4]

// function doubleEveryOther(array){
//     for (i = 1; i < array.length; i = i + 2){
//         array[i] = array[i] * 2;
//     }
//     return array;
// }

// console.log(doubleEveryOther([1,2,3,4,5]))

// function squareSum(numbers){
// return numbers.map((ele) => Math.pow(ele, 2)).reduce((pre, cur) => pre + cur);
//     }

// console.log(squareSum([]))   
class SmallestIntegerFinder {
    findSmallestInt(args) {
      
      let smallestNum = args[0];
      
      if (args.length < 1 ){
        return 0;
      } else {
          for (let i = 0; i < args.length; i++){
              if (args[i] < smallestNum) {
                  smallestNum = args[i];
              }
          }

      }
      return smallestNum;
    }
  }
let numFinder = new SmallestIntegerFinder()
  console.log(numFinder.findSmallestInt([78,56,232,12,18]));