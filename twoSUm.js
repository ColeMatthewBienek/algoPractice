//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.


// let twoSum = (nums, target) => {
// let result = [];
// //loop
//     for (i = 0; i < nums.length; i++){
//         let num1 = nums[i];
//         for (j = 0; j < nums.length; j++){
//             let num2 = target-num1;
//             console.log('num2',num2)
//             if (nums[j]===num2 && i !==j){
//                 result.push(i,j);
//                 return result;
//             }
//         }
//     }
    
// }

// console.log(twoSum(numsArray,targetNum));
let numsArray = [2,3,7,1,5];
let targetNum = 6;


//two sum with obj

// let twoSumWithObj = (nums, target) => {
//     let foundNums = [];
//     let numObject = {};
//     for (let number of nums){
//         let currentNumber = target - number;
//             if (currentNumber in numObject){
//                 foundNums.push(currentNumber, number)
//             } else{
//                 numObject[number] = true;
//             }
//         }

//         let num1 = nums.indexOf(foundNums[0]);
//         let num2 = nums.indexOf(foundNums[1]);
        
//         return [num1,num2]
//     }

// console.log(twoSumWithObj(numsArray, targetNum))

//two sum with obj and O(n)