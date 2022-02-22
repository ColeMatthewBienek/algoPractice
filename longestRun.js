// A consecutive-run is a list of adjacent, consecutive integers. 
// This list can be either increasing or decreasing.
//  Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

// longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest)

function getNextRun(numList, currentPosition) {
    let results = {length: 1, position: currentPosition + 1} // default values if not a run

    if (currentPosition === numList.length - 1) { // at end of list
        return results;
    } else {
        let [first, second] = numList;
        if (first === second) { // consecutive numbers are equal
            return results;
        }

        // determine current order
        let ascending = first < second;

        // iterate through run until current order breaks
        
    }
}

function maiaLongestRun(numList) {
    let currentPosition = 0;  // array position tracker
    let longest = 0;
    
    while (currentPosition < numList.length) {
        let {length, position} = getNextRun(numList, currentPosition);
        longest = length > longest ? length : longest;
        currentPosition = position;
    }

    return longest;
}

/* ------------------------ Original Version Below, Maia's Version Above ------------------------------------ */

function isConsecutive(num1, num2){
   return (num1 + 1 === num2 || num1 - 1 === num2);
}

// console.log(isConsecutive(1,3))

function checkRunLength (run, start) {
    
    let runLength = 0;
    for ( i=start; i < run.length; i++){
        let currentNum = run[i];
        let nextNum = run[i+1];
        
        if (isConsecutive(currentNum, nextNum)){
            // console.log('c',currentNum, 'n',nextNum, isConsecutive(currentNum, nextNum)), 
            runLength++;
        }
    }
    return runLength;
}
// console.log('crl',checkRunLength([1,2,3,4,6,7], 1))

function longestRun (runData) {
    //set a base for longestRun === length of consecutive nums in the array
    let longestRun = 0;
    //send run to checkRunLength
        for (i = 0; i < runData.length; i++){ // do it with while ( i < length)
            let currentRun = checkRunLength(runData, runData[i]);
                if (currentRun > longestRun){
                longestRun = currentRun;
                }
        }

    return longestRun;
}

console.log(longestRun([1,2,3,4,6,7,8, 9, 10, 11])); //7