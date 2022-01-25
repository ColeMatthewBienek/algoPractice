const array = [[1, 4], [true, false], ['x', 'y']];

//use reduce to collapse an array of arrays

function joinArrayOfArrays (array) {
    //write a reducer func to join nested arrays
    let reduceNestedArray = (pre, cur) => pre.concat(cur);
    return array.reduce(reduceNestedArray);
}

console.log(joinArrayOfArrays(array));