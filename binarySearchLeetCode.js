// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


function search(nums, target){

   let startPoint = 0;
   let endPoint = nums.length-1;

   while (startPoint <= endPoint){
       let midPoint = Math.floor((startPoint + endPoint)/2);

       if (nums[midPoint] === target){
           return midPoint
       }

       if (target > nums[midPoint]){
           startPoint = midPoint + 1;
       }
        if (target < nums[midPoint]){
            endPoint = midPoint - 1
        }
   }
   return -1
}

let nums = [-1, 5, 7, 9, 11, 18, 27, 66];
let target = 27;

console.log(search(nums, target));

