// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank (array){
   //create a table (obj --> rankCount) of counts of the numbers in the array
    let rankCount = {};
    
    array.forEach((element) => {
        if (rankCount[element]) {
            rankCount[element] ++;
        } else {
            rankCount[element] = 1;
        }
    });
    console.log(rankCount);
    //create a holder for the most frequently occurring number
    let mostFreqNumCount = 0;
    let mostFreqNum = 0;

    //iterate through the object and select the number(s) that most frequently appear
    for ( let number in rankCount) {
        if (rankCount[number] > mostFreqNumCount){
            mostFreqNum = number;
            mostFreqNumCount = rankCount[number];
                } else if  (rankCount[number] === mostFreqNumCount){
                    if (number > mostFreqNum){
                        mostFreqNum = number;
                        mostFreqNumCount = rankCount[number];
                    }
            }
    }
    //return the holder
    return Number(mostFreqNum);

}

//
let actual = highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);
let expected = 3;

let actualTie = highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] );
let expectedTie = 12;


function assertEqual(actual, expected, testName){
    if (actual === expected){
        console.log(`passed, ${actual} === ${expected} ${testName}`);
    } else {
        console.log(`failed, ${testName}. expected ${actual} to equal ${expected}`);
    }
}

assertEqual(actual, expected, 'Should return the most frequently occurring number');
assertEqual(actualTie, expectedTie, 'Should return the most frequently occurring number when there is a tie');