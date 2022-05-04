let nums = [-1,1,0,-3,3];
//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

//Hard mode: write an algorithm that runs in 0(n) time without using the division operation

function productExceptSelf(nums) {
    let container=[];
    let result = 1;
    for ( i = 0; i < nums.length; i++){
        let pointer = i;
        for (j = 0; j< nums.length; j++){
            if (j !== pointer){
                result *= nums[j]
            }
        }
       container.push(result);
       result = 1;
    }
    return container;

}

console.log(productExceptSelf(nums));
