let actual = multiplyByTwo(2);
let expected = 4;
let testName = 'it doubles 2 to 4';
function assertEqual(actual, expected, testName) {
    if (actual === expected){
        return 'passed';
    } else {
        return 'FAILED ' + '[' + testName + '] ' + 'Expected ' + '"' + expected + '"' + ', but got ' + '"' + actual + '"'
                //`FAILED [${testName}] Expected "${expected}", but got "${actual}"`
    }
}

function multiplyByTwo(num){
    return num * 2 +1;
}


console.log(assertEqual(actual, expected, testName));