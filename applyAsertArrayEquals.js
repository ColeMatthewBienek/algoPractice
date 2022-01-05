function map(array, callbackFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }
  console.log('New',newArray)
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return Math.pow(n,3);
  });
}

// ASSERTION FUNCTION(S) TO BE USED
let actual1 = cubeAll([2,4,6,8]);
let expected1 = [8,64,216,512]
let testName1 = `Test 1: test should return cubes of all the numbers submitted in the array`
//
let actual2 = cubeAll([0,1,2,3]);
let expected2 = [0,1,8,27]
let testName2 = `Test 2: test should return cubes of all the numbers submitted in the array`
// TESTS CASES
function assertArrayEquals (actual, expected, testName){
  let arraysMatch = true
    for (i = 0; i < expected.length; i++){
        if (expected[i] !== actual[i]){
            arraysMatch = false
        } 
    break
}
    let arrayLengthMatches = (expected.length === actual.length) ? true : false;
    let result = (arraysMatch === true && arrayLengthMatches === true) ? console.log(`PASSED, ${testName}`) : console.log(`FAILED, ${testName} Expected [${expected}], but received [${actual}].`);
         return result;
}

//
assertArrayEquals(actual1,expected1,testName1);
assertArrayEquals(actual2,expected2,testName2);
