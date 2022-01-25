// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// 

//questions:
//is there ever an instance where beginning at a negative integer could result in a larger sum?

//should I begin by searching for the largest num in the array?

//i don't have tro remember the sequence, just the sum

//i am returning a single value...is reduce an option?
    //

//
// power set is all the possible subsets from a given set === 2^n
//so, given set --> [1,2,3,4,5,6], the power set is 2^6

//- View picking a solution as a sequence of choices
//  - For each choice, consider every option recursively
//  - Return the best solution found


//constraints
    //elements must be consecutive
    //if all elements are neg, return zero

function maxSequence (array) {
    //goal: find the maximum sum of a subarray of given array
    //if all elements are negative, return zero
    if (array.every ((element ) => element < 1)) {
        return 0;
    }
    //examine all the contiguous subarrays of the given array and test their sums vs a running high sum
    let maxFound = 0;
    let currentSum = 0;
    //
    for (i = 0; i < array.length; i++){
        console.log( array[i], currentSum + array[i])
        //comnpares the value at the current index(i) to the previously existing current sum + the value at the current index
        currentSum = Math.max(array[i], currentSum + array[i]);
        //compares the current sum to the maximum found sum, and assigns the result to the maxFound variable
        maxFound = Math.max(currentSum, maxFound);
        console.log('idx', i, 'CurrentSum:', currentSum, 'maxFound:',maxFound)
        }
        //return the value at maxFound;
        return maxFound;
    }
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSequence(nums))
