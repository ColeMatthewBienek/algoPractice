// Write a function called "sumDigits".
// Given a number, "sumDigits" returns the sum of all its digits.
// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.
// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:
// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.


// function sumDigits(num) {
// let converter = num
//     .toString()
//     .split('')
// console.log('converter',converter[0])


// let numConverter = (converter[0]==='-') ? negFirstNumber(converter) : notNegFirstNumber(converter)
// console.log(numConverter)
// return numConverter.reduce((pre, cur) => pre + cur)

// }

// function notNegFirstNumber (arr) {
//     console.log('mede it here')
//     let result = [];
//     for (i = 0; i < arr.length; i ++){
//         result.push(Number(arr[i]))
//     }
//     return result;
// }

// function negFirstNumber (arr) {
//     let pureNumber = arr.slice(1);
//         pureNumber[0]= '-' + pureNumber[0];
    
//         let result =[];
//             for (i = 0; i <pureNumber.length; i++){
//                 result.push(Number(pureNumber[i]))
//             }
//     return result;
// }

function sumDigits(num) {
    
    const unsignedNum = Math.abs(num)
   
    if (unsignedNum > 9) {
      let onesDigit = unsignedNum % 10
      let remainder = Math.floor(unsignedNum / 10)
      return onesDigit + sumDigits(remainder)
    } else {
      return num
}
    return total
}   
    
// function sumDigits (num) {
//     let total = digitSum(num);
    
//     let isNegative = (num < 0) ? true : false;
//     let stringNum = num.toString();
//     let firstNum = Number(stringNum[0]);
//     if (isNegative) {
//         total = total - (firstNum * 2)
//         return total;
//     } else {
//         return total;
//     }
// }





console.log(sumDigits(-1234));