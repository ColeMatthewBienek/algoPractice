let person = {
    firstName: 'Maia',
    lastName: 'Ling'
};

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj.lastName;
  
    if (firstName && lastName) {
      obj['fullName'] = `${firstName} ${lastName}`
    };
  
    return obj;
  };
  let expected = {
      firstName: 'Maia',
      lastName: 'Ling',
      fullName: 'Maia Ling'
  };
  let actual = addFullNameProp(person);
  let testName = `Test should add a fullName key, and concatenate firstName & lastName into fullName`;
  // ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual,expected,testName){
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected){
        console.log(`PASSED ${testName}`);
    }else {
        console.log(`FAILED! ${testName}, expected ${expected}, but received, ${actual}`);
    }
}
  // TESTS CASES
  assertObjectsEqual(actual, expected, testName);
