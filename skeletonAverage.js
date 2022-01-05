// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    let summed = sum(numbers);
    // returns the average of an array of numbers
    let averaged = summed / numbers.length;
    return averaged
  }
  
  function sum(numbers) {
    // returns the sum of an array of numbers
    return numbers.reduce((previous, current) => previous + current);
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEquals (actual, expected, testName){
      if (actual === expected){
          console.log(`PASSED, ${testName}`)
      } else {
          console.log(`FAILED ${testName}, expected ${expected}, but got ${actual}`);
      }
  }
  // TESTS CASES
  let actualSum = sum([1,2,3,4]);
  let expectedSum = 10;
  let sumTestName = `Test should sum an array of numbers`
  //
  let actualAverage = average([1,2,3,4,5,6]);
  let expectedAverage = 3.5
  let averageTestName = `Test should return an average of an array of numbers`
  //
  assertEquals(actualSum, expectedSum, sumTestName);
  assertEquals(actualAverage,expectedAverage,averageTestName);
