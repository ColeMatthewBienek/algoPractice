// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];

// function transformEmployeeData(employeeData) {
//     let formattedData = [];

//     for(let employee of employeeData) {
//         let employeeObj = {};

//         for(let field of employee) {
//             let [key, value] = field;
//             employeeObj[key] = value;
//         }

//         formattedData.push(employeeObj);
//     }

//     return formattedData;
// }


// function transformEmployeeData(employeeData) {
//     //employeeData[0] ===    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//       //employeeData[0][0]===  ['firstName', 'Joe']
//        //employeeData[0][0][0]==='firstName'
//        let employee = {};
//        let result = [];
//        //build the object
//        //iterate over the employees
//       for (i = 0; i < employeeData.length; i++) {
//           console.log('---------------------- employee')
//         //iterate over the specific employee data
//         for (j = 0; j < employeeData[i].length; j++){
//             let key = employeeData[i][j][0];
//             let value = employeeData[i][j][1];
//             employee[key] = value
//         }
//         //push the employee into the result array 
//         result.push(employee);
//         //reset the employee 
//         employee = {};
        
//       }
     
//     return result;
//   }

//  console.log(transformEmployeeData(input))

// // var input = {
// //     name: 'Holly',
// //     age: 35,
// //     role: 'producer'
// //   };

// // function convertObjectToArray(obj) {
// //     let result = [];
// //     let tempArray = [];
// //     for (let key in obj) {
// //         tempArray.push(key, obj[key])
// //         console.log(tempArray)
// //         result.push(tempArray)
// //         tempArray = []
      
// //     }
// //     return result;
// //   }

// //   console.log(convertObjectToArray(input))
// arr = [2, 8, 10, 2];

// function getLargestElement(arr) {
//     let reducer = ((prev, curr) => (curr > prev) ? curr : prev);
// //    if (arr.length < 1){
// //        return 0;
// //    } else {
// //        return arr.reduce(reducer);
// //    }
//     return arr.length < 1 ? 0 : arr.reduce(reducer);
// }
    
//  console.log(getLargestElement(arr))


// function getProductOfAllElementsAtProperty(obj, key) {
//     // let array = obj[key];
//     //if there is no propery at the location, or if the property at the key is not an array, return 0
//     if (!Array.isArray(array)) {
//         return 0;
//     } else {
//        if (array.length < 1){
// //             return 0;
// //         } else {
// //         return array.reduce((prev, curr) => prev * curr);
// //         }
// //     }
// // }
// let num = 1234;
// function sumSomeDigits(number) {

// let  absNumber = Math.abs(number);
//   if (absNumber > 9){
//     let ones = absNumber %10;
//     let whatRemains = Math.floor(absNumber /10);
//     return ones + sumSomeDigits(whatRemains);
//   } else {
//       return absNumber;
//   }
// }

// function sumDigits(number){
//     let isNegative = (number <0);
//     let total = Math.abs(sumSomeDigits(number));
//     let absNumber = Math.abs(number)
//     if (isNegative ){
//         let stringNum = absNumber.toString();
//         let firstDigit = Number(stringNum[0]);
//         total = total - (firstDigit * 2);
//         return total
//     } else {
//         return total;
//     }
// }

// // //
// let actual = sumDigits(1234);
// let expected = 10;
// let testName = `should add the digits`
// let actuallNegNum = sumDigits(-342);
// let expectedNegNum = 3;
// let testNameNegNum = `should add digits when the first digit is a negative number`
// // //
// function assertEqual(actual, expected, testName){
//    if (actual !== expected){       console.log(`Failed, ${testNameNegNum}, expected ${expectedNegNum}, but received ${actuallNegNum}`)
//     } else {
//     console.log(`passed! ${testNameNegNum}`)
//    }
//  }

// //
// assertEqual(actual, expected, testName);
// assertEqual(actuallNegNum, expectedNegNum, testNameNegNum);'

let arr = [1,'a', 10, 8, 'zee', 11]

function findSmallestNumberAmongMixedElements(arr) {
    //test if the array is empty, if it is, return 0;
    if (arr.length < 1){
        return 0;
    }
    //filter the numbers from the array
    let numberFilter = arr.filter(element => typeof element === 'number');
    console.log(numberFilter)
    //if the filtered array contains no numbers, return 0
    if (numberFilter.length < 1){
        return 0;
    }
    //iterate over the array
    return numberFilter.reduce ((pre, cur) => cur < pre ? cur : pre);
}
  console.log(findSmallestNumberAmongMixedElements(arr))
// let arr = [1,3,5,5,6,7,2,4,5,9]
// function numCounter(arr, numToFind) {
//     //if array is empty, return 0;
//     if (arr.length < 1){
//         return 0;
//     }
//     //set a counter to track the count of numToFind
//     let counter = 0;
//     //iterate over the array
//     arr.forEach ((element) => {
//         //increment counter each time an array element matches the numToFind
//         if (element === numToFind){
//             counter++
//         }
//         //return counter
        
//     })
//     return counter;
// }
// console.log(numCounter(arr, 5));
