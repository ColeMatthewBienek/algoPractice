//FUNCTION DEFINITION(S)
function square(n) {
  return n * 'n';
}

// ASSERTION FUNCTION(S) TO BE USED
let testNames = ["Function should return a number","Function should return a square"]
let actual = square(4);
let expected = 16
function assertEqual (actual, expected, testNames){
    if (!Number.isNaN(actual)){
        console.log(`Passed You returnedsjdhakFDH a number`);
    } else {
        console.log(`FAILED [${testNames[0]} expected ${expected}, but received ${actual}`)
    }
    if (actual === expected){
        console.log(`Passed`)
    } else {
        console.log(`FAILED [${testNames[1]} expected ${expected} but received ${actual} `)
    }
}

// TESTS CASES
assertEqual(actual, expected, testNames)

