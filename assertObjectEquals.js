
let person = {
    firstName: 'Cole'
};
let actual = updateObject(person, 'firstName', 'Jim');
let testName = 'updates the person object'
let expected = {
    'firstName': 'Jim'
}

function updateObject (obj, key, value){
  obj[key] = value;
  return obj
}

function assertObjectsEqual(actual, expected, testName){
    //JSON.stringify both objects for === comparison
    actual = JSON.stringify(actual);
    expected= JSON.stringify(expected);

    if (actual === expected){
        console.log('passed');
    } else { 
        console.log (`FAILED [${testName}] Expected) ${expected}, but got ${actual}`)
    }
}

assertObjectsEqual(actual, expected, testName);

